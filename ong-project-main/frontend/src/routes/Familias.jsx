import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Familias.css";
import { baseURL } from "../services/baseURL.js";
import { UseID } from '../main.jsx';

import { useNavigate } from 'react-router-dom';

const AddFamiliaForm = ({ onCreateFamilia }) => {
  const [newFamilia, setNewFamilia] = useState({
    "renda": 0,
    "numero_pessoas": 0,
    "cep": ""
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFamilia({ ...newFamilia, [name]: value });
  };

  useEffect(() => {
    const formFields = Object.values(newFamilia);
    const isValid = formFields.every(field => field !== "" && field !== null);
    setIsFormValid(isValid);
  }, [newFamilia]);

  const handleCreateFamilia = () => {
    onCreateFamilia(newFamilia);
    setNewFamilia({
      "renda": 0,
      "numero_pessoas": 0,
      "cep": ""
    });
  };

  return (
    <div className="add-familia-form">
      <h3 className="h3Placeholder">Número de pessoas na família:</h3>
      <input
        type="number"
        placeholder="Número de pessoas"
        name="numero_pessoas"
        value={newFamilia.numero_pessoas}
        onChange={handleInputChange}
        min="1"
        max="10"
        required
      />
      <h3 className="h3Placeholder">Renda total da família:</h3>
      <input
        type="number"
        placeholder="Renda total"
        name="renda"
        value={newFamilia.renda}
        onChange={handleInputChange}
        min="0"
        max="100000"
        required
      />
      <h3 className="h3Placeholder">CEP:</h3>
      <input
        type="text"
        placeholder="Somente números"
        name="cep"
        value={newFamilia.cep}
        onChange={handleInputChange}
        pattern="[0-9]{8}"
        required
      />
      <button onClick={handleCreateFamilia} disabled={!isFormValid}>Add Família</button>
    </div>
  );
};

const AddBeneficiarioForm = ({ idFamilia, numeroBeneficiarios }) => {
  const { fetchData } = useContext(UseID);
  const navigate = useNavigate();

  const handleBackToTableClick = () => {
    fetchData();
    window.alert('Família e beneficiários adicionados com sucesso!');
    navigate('/');
  };

  const [newBeneficiario, setNewBeneficiario] = useState(
    Array.from({ length: numeroBeneficiarios }, () => ({
      "nome": "",
      "data_nascimento": "",
      "cpf": "",
      "idade": 0
    }))
  );

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedBeneficiarios = [...newBeneficiario];
    updatedBeneficiarios[index][name] = value;
    setNewBeneficiario(updatedBeneficiarios);
  };

  const handleCreateBeneficiario = async () => {
    const response = await axios.get(`${baseURL}/beneficiario/listar`);
    const lastBeneficiario = response.data[response.data.length - 1].id_beneficiario + 1;
    
    try {
      newBeneficiario.forEach(async (beneficiario, index) => {
        const novoBeneficiario = {
          "id_beneficiario": lastBeneficiario + index + 1,
          "id_familia": idFamilia,
          "nome": beneficiario.nome,
          "data_nascimento": beneficiario.data_nascimento,
          "cpf": beneficiario.cpf,
          "idade": beneficiario.idade
        };

        await axios.post(`${baseURL}/beneficiario/`, novoBeneficiario);
      });
    } catch (error) {
      console.log(error);
    }

    handleBackToTableClick();
  };

  return (
    <div className="add-beneficiario-form">
      <h2>Adicionar Beneficiário:</h2>
      {newBeneficiario.map((_, index) => (
        <div key={index}>
          <h3>Beneficiário {index + 1}</h3>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            value={newBeneficiario[index]?.nome}
            onChange={(e) => handleInputChange(e, index)}
            maxLength="100"
            required
          />
          <input
            type="date"
            placeholder="Data de Nascimento"
            name="data_nascimento"
            value={newBeneficiario[index]?.data_nascimento}
            onChange={(e) => handleInputChange(e, index)}
            required
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={newBeneficiario[index]?.cpf}
            onChange={(e) => handleInputChange(e, index)}
            pattern="[0-9]{11}"
            required
          />
          <input
            type="number"
            placeholder="Idade"
            name="idade"
            value={newBeneficiario[index]?.idade}
            onChange={(e) => handleInputChange(e, index)}
            min="0"
            max="110"
            required
          />
        </div>
      ))}
      <button onClick={handleCreateBeneficiario}>Criar Beneficiário</button>
    </div>
  );
};

const Familias = () => {
  const { id } = useContext(UseID);
  const [lastFamilia, setLastFamilia] = useState(0);
  const [numeroBeneficiarios, setNumeroBeneficiarios] = useState(0);
  const [showFamilia, setShowFamilia] = useState(true);
  const [showBeneficiarios, setShowBeneficiarios] = useState(false);

  useEffect(() => {
    getFamilias();
  }, []);

  const getFamilias = async () => {
    try {
      const response = await axios.get(`${baseURL}/familias/listar-familias`);
      setLastFamilia(response.data[response.data.length - 1].id_familia + 1);      
    } catch (error) {
      console.log(error);
    }
  }

  const createFamilia = async (newFamiliaData) => {
    try {
      const novaFamilia = {
        "id_familia": lastFamilia,
        "id_ong": id,
        "renda": parseInt(newFamiliaData.renda),
        "numero_pessoas": parseInt(newFamiliaData.numero_pessoas),
        "cep": newFamiliaData.cep
      };

      setNumeroBeneficiarios(novaFamilia.numero_pessoas);
      setShowFamilia(false);
      setShowBeneficiarios(true);

      await axios.post(`${baseURL}/familias/inserir/`, novaFamilia);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contentFamilia">
      {showFamilia && <AddFamiliaForm onCreateFamilia={createFamilia} />}
      {showBeneficiarios && (
        <AddBeneficiarioForm idFamilia={lastFamilia} numeroBeneficiarios={numeroBeneficiarios} />
      )}
    </div>
  );  
};


export default Familias;
