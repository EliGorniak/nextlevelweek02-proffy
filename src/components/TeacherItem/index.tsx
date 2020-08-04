import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/51176710?s=460&u=3d38ac88c21cefa3a54784a873e8da98e308b2b9&v=4"
          alt="Eli Gorniak"
        />
        <div>
          <strong>Eli Gorniak</strong>
          <span>Programação Web</span>
        </div>
      </header>
      <p>
        Programadora Web com formação Full Stack.
        <br /> <br />
        Entusiasta de tecnologia e apaixonada por ensinar.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
