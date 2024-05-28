import React, { useState, useEffect } from 'react';
import './TableFilter.css';

const OngsTableFilter = ({ data, onRowClick, filterOption }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const formattedFilter = filterOption.trim().toLowerCase();
    const filteredResults = data.filter((ong) =>
      ong.cnpj.toLowerCase().includes(formattedFilter)
    );
    setFilteredData(filteredResults);
  }, [data, filterOption]);

  return (
    <table className='contentTable'>
      <thead>
        <tr className='titleTable'>
          <th>Nome</th>
          <th>CNPJ</th>
          <th>Telefone</th>
          <th>Logradouro</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((ong) => (
          <tr className='line' key={ong.id_ong} onClick={() => onRowClick(ong)}>
            <td>{ong.nome}</td>
            <td>{ong.cnpj}</td>
            <td>{ong.telefone}</td>
            <td>{ong.logradouro}</td>
            <td>{ong.cidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OngsTableFilter;
