import React from "react";

import maisBebidas from "../textos/textoBebidas";
import styles from "../css/inicio.module.css";


export default function Bebidas() {
  return (
    <>
      <h1>Bebidas Especiais</h1>

      <section className={styles.secaoPedidos}>
        {maisBebidas.map((item) => (
          <div className={styles.blocoPedidos} key={item.id}>
            <figure>
              <img src={item.imagem} alt={`Imagem ${item.id}`} />
            </figure>
            <p>{item.nomeAlimento}</p>
            <p>{item.descricao}</p>
            <div className={styles.blocoBotao}>
                <p>{item.valor}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}