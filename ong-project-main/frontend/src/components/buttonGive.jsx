import React, { useState, useEffect } from "react";
import axios from "axios";
import "./buttonGive.css";
import { baseURL } from "../services/baseURL";

const ButtonGive = ({ familia }) => {
  const [isDelivered, setIsDelivered] = useState(false);
  const [idColeta, setIdColeta] = useState(null);
  const [lastDeliveryDate, setLastDeliveryDate] = useState(null);

  const fetchColeta = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/coletas/buscar/${familia}`
      );
      const coleta = response.data[response.data.length - 1];
      setIsDelivered(coleta.status === "entregue");
      setLastDeliveryDate(coleta.data_coleta);
      setIdColeta(coleta.id_coleta);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = async () => {
    try {
      const coleta = {
        id_familia: familia,
        id_coleta: idColeta,
        id_cesta_basica: 1,
        data_coleta: new Date().toISOString().split("T")[0],
        status: isDelivered ? "não entregue" : "entregue",
      };

      if (idColeta) {
        await axios.put(`${baseURL}/coletas/atualizar/${idColeta}`, coleta);
      } else {
        await axios.post(`${baseURL}/coletas/criar/`, coleta);
      }

      setIsDelivered(!isDelivered);
      setLastDeliveryDate(coleta.data_coleta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchColeta();
  }, []);

  return (
    <div
      className={`container-entregar-cesta ${
        isDelivered ? "entregue" : "para-entregar"
      }`}
    >
      <h2>Status de Entrega</h2>
      <div
        className={`status-text ${isDelivered ? "delivered" : "to-deliver"}`}
      >
        {isDelivered ? `Entregue em ${lastDeliveryDate}` : "Não Entregue"}
      </div>
      <button className="botao-entregar-cesta" onClick={handleButtonClick}>
        {isDelivered ? "Marcar como Não Entregue" : "Marcar como Entregue"}
      </button>
    </div>
  );
};

export default ButtonGive;
