import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Ongs.css";
import OngsTableFilter from "../components/OngsFilter.jsx";
import AdicionarOng from "../components/AdicionarOng.jsx";
import ContainerOng from "../components/ContainerOng.jsx";
import { HiOutlineSearch } from "react-icons/hi";
import { baseURL } from "../services/baseURL.js";
import { UseID } from '../main.jsx';

const Ongs = () => {
  const [ongs, setOngs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [selectedOng, setSelectedOng] = useState(null);
  const [addingNewOng, setAddingNewOng] = useState(false);
  const { id } = useContext(UseID);
  const [data, setData] = useState([]);

  useEffect(() => {
    getOngs();
  }, []);

  const handleAddSuccess = () => {
    setAddingNewOng(false);
    getOngs();
  };

  const getOngs = async () => {
    try {
      let apiUrl = `${baseURL}/ongs/listar-ongs`;
  
      const response = await axios.get(apiUrl);
  
      const ongEncontrada = response.data.find((ong) => ong.id_ong === id);

      setData(ongEncontrada);
  
      let filteredOngs = response.data;
  
      if (filterOption) {
        const formattedFilter = filterOption.trim();
        filteredOngs = response.data.filter((ong) =>
          ong.cnpj.includes(formattedFilter)
        );
      }
  
      setOngs(filteredOngs);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getOngs();
  }, [filterOption]);

  if (id === 1) {
    return (
      <div className="contentONG">
        <h2 className="tituloSecoesOng">Buscar ONGs</h2>
        {addingNewOng ? (
          <AdicionarOng
            onAddSuccess={handleAddSuccess}
            onBackClick={() => setAddingNewOng(false)}
          />
        ) : (
          <div className="tableContentOng">
            {selectedOng ? (
              <ContainerOng
                selectedOng={selectedOng}
                onBackClick={() => setSelectedOng(null)}
                buttonBack={true}
              />
            ) : (
              <div className="contentNotSelect">
                <div className="sup-filterongs">
                  <div className="searchAnddescription">
                    <div className="searchInput">
                      <HiOutlineSearch />
                      <input
                        type="text"
                        className="textInput"
                        placeholder="Digite Aqui..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <p className="descriptionFiltro">
                      (Busque por Nome, CPF, CEP ou Telefone)
                    </p>
                  </div>
                  <button
                    className="botaoAdicionarONG"
                    onClick={() => setAddingNewOng(true)}
                  >
                    Adicionar Nova Ong
                  </button>
                </div>
                <div className="tableOngsFilter">
                  <OngsTableFilter
                    data={ongs.filter((ong) => ong.cnpj.includes(search))}
                    onRowClick={(ong) => setSelectedOng(ong)}
                    filterOption={filterOption}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  } else {
    return <div className="ongUnica"><ContainerOng selectedOng={data} onBackClick={() => setSelectedOng(null)} buttonBack={false}/></div>;
  }
};

export default Ongs;
