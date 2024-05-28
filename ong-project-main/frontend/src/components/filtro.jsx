import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../services/baseURL";

const Filtro = ({ onFilterSelect, onClearFilters, onClose }) => {
  const [filtroOptions, setFiltroOptions] = useState([]);

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await axios.get(`${baseURL}/ongs/listar-ongs`);
        const ongsData = response.data;

        const uniqueLogradouros = [
          ...new Set(ongsData.map((ong) => ong.logradouro)),
        ];
        setFiltroOptions(uniqueLogradouros);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOngs();
  }, []);

  const handleClick = (option) => {
    console.log(`Filtro selecionado: ${option}`);
    onFilterSelect(option);
  };

  return (
    <div className="filtro-container">
      <h1>Escolha um logradouro para filtrar:</h1>
      <ul>
        {filtroOptions.map((option, index) => (
          <li key={index} onClick={() => handleClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <button className="clear-button" onClick={onClearFilters}>
        Limpar Filtros
      </button>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Filtro;
