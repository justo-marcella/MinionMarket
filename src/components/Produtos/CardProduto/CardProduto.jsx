import React from "react";
import styles from "./CardProduto.module.css";

function CardProduto(props) {
  return (
    <div className={props.id === 3 ? styles.card3 : styles.card}>
      <img src={props.src} alt="Minion" />
      <p>{props.nome}</p>
      <button>Reservar</button>
    </div>
  );
}
export default CardProduto;
