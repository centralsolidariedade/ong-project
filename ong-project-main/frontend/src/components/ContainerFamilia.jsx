import React from 'react';
import './ContainerFamilia.css';
import ButtonGive from './buttonGive.jsx';

const ContainerFamilia = ({ selectedItem, onBackClick }) => {

  const handleBackClick = () => {
    onBackClick();
  };  
  
  const id_familia_int = parseInt(selectedItem.id_familia);

  return (
    <div className='container-familia'>
      <div>
        <div>
          <h1 className='titulofamilia'>Família de {selectedItem.nome}</h1>
          <p className='cpf-text'>CPF: {selectedItem.cpf}</p>
        </div>
        <div className='infomacoes-familia-individuo'>
          <div className='card-infos-familia'>CEP: <strong>{selectedItem.cep}</strong></div>
          <div className='card-infos-familia'>Número de Pessoas: <strong>{selectedItem.numero_pessoas}</strong></div>
          <div className='card-infos-familia'>Renda Total: <strong>{selectedItem.renda} Reais</strong></div>
        </div>
        <div className='entregar-cesta-basica-container'>
          <ButtonGive familia={id_familia_int} />
        </div>
      </div>
      <button className='buttonBackTable' onClick={handleBackClick}>Voltar para a Tabela</button>
    </div>
  );
};

export default ContainerFamilia;
