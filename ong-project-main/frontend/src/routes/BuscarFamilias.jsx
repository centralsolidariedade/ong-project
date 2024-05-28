import React, { useContext, useState } from 'react';
import './BuscarFamilias.css';
import TableFilter from '../components/TableFilter.jsx';
import ContainerFamilia from '../components/ContainerFamilia.jsx';
import { HiOutlineSearch } from 'react-icons/hi';
import { UseID } from '../main.jsx';
import { Link } from 'react-router-dom';

const BuscarFamilias = () => {
  const [search, setSearch] = useState('');
  const { data, selectedItem, setSelectedItem, fetchData } = useContext(UseID);


  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackToTableClick = () => {
    setSelectedItem(null);
    fetchData();
  };
  
  return (
    <div className='layoutSlider'>
      <h2 className='tituloSecoes'>Buscar Família</h2>
      <div className='containerBuscar'>
        {selectedItem ? (
          <ContainerFamilia
            selectedItem={selectedItem}
            onBackClick={() => handleBackToTableClick()}
          />

        ) : (
          <>
            <div className='addFamilySearch'>
              <div>
                <div className='searchInput'>
                  <HiOutlineSearch />
                  <input
                    type='text'
                    className='textInput'
                    placeholder='Digite Aqui...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <p className='descriptionFiltro'>(Busque por Nome, CPF, CEP ou Telefone)</p>
              </div>
              <Link to={'/familias/'} className='linkAddNewFamily'>Add Family</Link>
            </div>
            <TableFilter data={data.filter(item => item && item.cep && item.cep.includes(search))} onRowClick={handleRowClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default BuscarFamilias;
