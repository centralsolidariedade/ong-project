import React, { useContext, useEffect, useState } from "react";
import { UseID } from "../../main.jsx";
import "../../routes/Home.css";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UseID } from '../../main.jsx';
import '../../routes/Home.css'


import "./SimpleView.css";

import TableFilter from "../TableFilter.jsx";
import { HiOutlineSearch } from "react-icons/hi";
import { MdHandshake } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { GrStatusInfo } from "react-icons/gr";
import { GrStatusWarning } from "react-icons/gr";
import { SlPeople } from "react-icons/sl";

const SimpleView = () => {
  const { id, data, selectedItem, setSelectedItem } = useContext(UseID);
  const [search, setSearch] = useState("");

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const data_json = JSON.stringify(data);

  function contarStatus(jsonArray) {
    const jsonArrayObj = JSON.parse(jsonArray);
    const contagens = {};
    jsonArrayObj.forEach((obj) => {
      if ("status" in obj) {
        contagens[obj.status] = (contagens[obj.status] || 0) + 1;
      }
    });
    return contagens;
  }

  const contagensStatus = contarStatus(data_json);
  const status = contagensStatus;

  const beneficiariosMenoresDe12Anos = data.filter(
    (beneficiario) => beneficiario.idade < 12
  );
  const beneficiariosMaioresDe50Anos = data.filter(
    (beneficiario) => beneficiario.idade > 49
  );
  const familiasDaOng = data.filter((familia) => familia.id_ong.id_ong === id);

  const calcularMediaIdade = () => {
    const beneficiariosFiltrados = data.filter((beneficiario) =>
      familiasDaOng.some(
        (familia) => familia.id_familia === beneficiario.id_familia.id_familia
      )
    );

    if (beneficiariosFiltrados.length === 0) {
      return 0;
    }

    const somaIdades = beneficiariosFiltrados.reduce((soma, beneficiario) => {
      const idadeAtual = beneficiario.idade;
      return soma + idadeAtual;
    }, 0);

    return Math.round(somaIdades / beneficiariosFiltrados.length);
  };

  return (
    <>
      <div className="contentHome">
        <h2 className="tituloSecoes">Informações</h2>
        <div className="containerLinksInfo">
          <div className="blockA">
            <div className="canvaBlockA">
              <GrStatusWarning className="bigIcons" size={75} />
              <div className="itemsNoIcon">
                <h1 className="bigNums">{status["entregue"]}</h1>
                <p>Cestas básicas entregues</p>
              </div>
            </div>
            <div className="canvaBlockA">
              <SlPeople className="bigIcons" size={65} />
              <div className="itemsNoIcon">
                <h1 className="bigNums">{status["não entregue"]}</h1>
                <p>Cestas básicas não entregues</p>
              </div>
            </div>
          </div>
          <div className="blockB">
            <div className="canvaBlockB">
              <MdHandshake className="smallIcons" size={35} />
              <h2 className="smallNumber">{familiasDaOng.length}</h2>
              <p>Famílias atendidas</p>
            </div>
            <div className="canvaBlockB">
              <FaPeopleGroup className="smallIcons" size={35} />
              <h2 className="smallNumber">
                {beneficiariosMenoresDe12Anos.length}
              </h2>
              <p>Menores de 12 anos</p>
            </div>
            <div className="canvaBlockB">
              <FaChild className="smallIcons" size={35} />
              <h2 className="smallNumber">
                {beneficiariosMaioresDe50Anos.length}
              </h2>
              <p>Idosos atendidos</p>
            </div>
            <div className="canvaBlockB">
              <GrStatusInfo className="smallIcons" size={35} />
              <h2 className="smallNumber">{calcularMediaIdade().toFixed(0)}</h2>
              <p>Idade média</p>
            </div>
          </div>
        </div>
        <h2 className="tituloSecoes">Filtros</h2>
        <div className="containerLinksFilter">
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
          <TableFilter
            data={data.filter(
              (item) => item && item.cep && item.cep.includes(search)
            )}
            onRowClick={handleRowClick}
          />
        </div>
      </div>
    </>
  );
};

export default SimpleView;
