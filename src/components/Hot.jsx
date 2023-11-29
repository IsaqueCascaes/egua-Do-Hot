
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import maisHot from "../textos/textoHot";
import styles from "../css/inicio.module.css";


export default function Hot() {
  return (
    <>
      <h1>Hot-Dogs Especiais</h1>

      <section className={styles.secaoPedidos}>
        {maisHot.map((item) => (
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