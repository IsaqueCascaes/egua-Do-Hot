import React from "react";
import textoPedidos from "../textos/TextoPedidos";
import styles from "../css/inicio.module.css";

export default function MaisPedidos() {
  return (
    <>
      <h1>Mais Pedidos</h1>

      <section className={styles.secaoPedidos}>
        {textoPedidos.map((item) => (
          <div className={styles.blocoPedidos} key={item.id}>
            <figure>
              <img src={item.imagem} alt={`Imagem ${item.id}`} />
            </figure>
            <p>{item.nomeAlimento}</p>
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>
    </>
  );
}
