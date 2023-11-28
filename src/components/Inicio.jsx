import styles from "../css/inicio.module.css";
import MaisPedidos from "./maisPedidos";

export default function Inicio() {
  return (
    <>
      <main className={styles.main}>
        <p className={styles.mainTexto}>
          Na Égua do Hot, nossos hot-dogs são tão autênticos que até o ketchup
          fica com inveja. Prepare-se para uma explosão de sabores amazônicos em
          cada mordida. Bem-vindo ao paraíso dos paladares ousados!
        </p>
      </main>

<MaisPedidos />


    </>
  );
}
