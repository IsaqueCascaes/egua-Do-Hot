import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import Cardapio from "./Cardapio";
import Logo from "../assets/hot-dog.png";
import styles from "../css/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <figure>
            <img src={Logo} alt="" />
          </figure>
          <ul className={styles.listamenu}>
            <li>
              <Link className={styles.link} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/cardapio">
                Cardapio
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Cardapio" element={<Cardapio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
