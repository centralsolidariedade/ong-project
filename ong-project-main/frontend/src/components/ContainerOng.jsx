import React from 'react';
import './ContainerOng.css';

const ContainerOng = ({ selectedOng, onBackClick, buttonBack }) => {
  return (
    <div className='container-ong'>
      <div>
        <div>
          <h1>{selectedOng.nome}</h1>
          <p className='cnpj-text'>CNPJ: {selectedOng.cnpj}</p>
        </div>
        <div className='infomacoes-ong'>
          <div className='card-infos-ong'>Telefone: <strong>{selectedOng.telefone}</strong></div>
          <div className='card-infos-ong'>Logradouro: <strong>{selectedOng.logradouro}</strong></div>
          <div className='card-infos-ong'>Cidade: <strong>{selectedOng.cidade}</strong></div>
        </div>
      </div>
      { buttonBack ? 
        <button className='buttonBackTable' onClick={onBackClick}>Voltar para a Tabela</button> 
        : null
      }
    </div>
  );
};

export default ContainerOng;
