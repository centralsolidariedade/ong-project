import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Beneficiarios.css";
import { baseURL } from "../services/baseURL";

const Beneficiarios = () => {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [newBeneficiario, setNewBeneficiario] = useState({
    nome: "",
    id_familia: "",
    idade: "",
    cpf: "",
    data_nascimento: "",
  });

  const getBeneficiarios = async () => {
    try {
      const response = await axios.get(`${baseURL}/beneficiario/listar`);
      setBeneficiarios(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createBeneficiario = async () => {
    try {
      console.log("Novo Beneficiario:", newBeneficiario);
      await axios.post(`${baseURL}/beneficiario/`, newBeneficiario);
      getBeneficiarios();
      setNewBeneficiario({
        nome: "",
        id_familia: "",
        idade: "",
        cpf: "",
        data_nascimento: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeneficiarios();
  }, []);

  return (
    <div className="contentBeneficiario">
      <h1>Beneficiários:</h1>
      {beneficiarios.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div className="grid-container">
          {beneficiarios.map((beneficiario) => (
            <div
              key={beneficiario.id_beneficiario}
              className="container-beneficiarios"
            >
              <h2>Beneficiário {beneficiario.id_beneficiario}</h2>
              <p> Nome : {beneficiario.nome}</p>
              <p> Família: {beneficiario.id_familia}</p>
              <p> Idade : {beneficiario.idade}</p>
              <p> CPF : {beneficiario.cpf}</p>
            </div>
          ))}
        </div>
      )}

      <div className="line"></div>

      <div className="add-beneficiario-form">
        <h2>Adicionar um novo Beneficiário:</h2>
        <input
          type="text"
          placeholder="Nome"
          value={newBeneficiario.nome || ""}
          onChange={(e) =>
            setNewBeneficiario({ ...newBeneficiario, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Família"
          value={newBeneficiario.id_familia || ""}
          onChange={(e) =>
            setNewBeneficiario({
              ...newBeneficiario,
              id_familia: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="Idade"
          value={newBeneficiario.idade || ""}
          onChange={(e) =>
            setNewBeneficiario({ ...newBeneficiario, idade: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="CPF"
          value={newBeneficiario.cpf || ""}
          onChange={(e) =>
            setNewBeneficiario({ ...newBeneficiario, cpf: e.target.value })
          }
        />
        <input
          type="date" // Campo de data
          placeholder="Data de Nascimento"
          value={newBeneficiario.data_nascimento || ""}
          onChange={(e) =>
            setNewBeneficiario({
              ...newBeneficiario,
              data_nascimento: e.target.value,
            })
          }
        />
        <button onClick={createBeneficiario}>Adicionar Beneficiário</button>
      </div>
    </div>
  );
};

export default Beneficiarios;
