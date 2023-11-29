import styles from "../css/cardapio.module.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Cardapio() {
  return (
    <>
      <h1>Nosso Cardapio</h1>
<section className={styles.blocoCards}>


  <Link className={styles.link} to={"/Hot"}><div className={styles.cards1}>Hot-Dogs</div></Link>
  <Link className={styles.link} to={"/Sanduba"}><div className={styles.cards2}>Sanduiches</div></Link>
  <Link className={styles.link} to={"/Bebidas"}><div className={styles.cards3}>Bebidas</div></Link>
</section>
    </>
  );
}
