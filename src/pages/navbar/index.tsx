import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo substituída por imagem */}
      <div className={styles.logo}>
        <Image src="/Gelato&Magia.png" alt="Gelato & Magia Logo" width={150} height={150} />
      </div>

      {/* Ícone do menu hambúrguer */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Links de navegação */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#produtos">Produtos</a>
        </li>
        <li>
          <a href="#localizacao">Onde Estamos</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>

      {/* Botões de login e cadastro */}
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.registerButton}>Cadastra-se</button>
      </div>
    </nav>
  );
}
