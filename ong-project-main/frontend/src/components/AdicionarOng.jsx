import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdicionarOng.css';
import { useNavigate } from 'react-router-dom';

function AdicionarOng() {

  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    id_ong: 0,
    nome: '',
    cnpj: '', // Atualizado para string '3' conforme exemplo curl
    telefone: '',
    logradouro: '',
    cidade: '',
    estado: '', // Atualizado para 'MG' conforme exemplo curl
    senha: '', // Atualizado para string '3' conforme exemplo curl
    cep: ''
  });

  useEffect(() => {
    handleOngsList();
  }, []);

  const handleOngsList = () => {
    axios.get('http://localhost:7777/ongs/listar-ongs')
      .then(response => {
        let lastOng = response.data[response.data.length - 1].id_ong + 1;
        setFormValues({ ...formValues, id_ong: lastOng });
      })
      .catch(error => {
        console.error('Erro ao buscar a lista de ONGs:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:7777/ongs/inserir/', formValues, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      window.alert('ONG cadastrada com sucesso!');
      navigate('/');

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="inputNovasONGS" type="text" name="nome" placeholder="Nome" value={formValues.nome} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="cnpj" placeholder="CNPJ" value={formValues.cnpj} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="telefone" placeholder="Telefone" value={formValues.telefone} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="logradouro" placeholder="Logradouro" value={formValues.logradouro} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="cidade" placeholder="Cidade" value={formValues.cidade} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="estado" placeholder="Estado" value={formValues.estado} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="senha" placeholder="Senha" value={formValues.senha} onChange={handleChange} />
      <input className="inputNovasONGS" type="text" name="cep" placeholder="CEP" value={formValues.cep} onChange={handleChange} />
      <button className="botaoFormOngs" type='submit'>Enviar</button>
    </form>
  );
}

export default AdicionarOng;