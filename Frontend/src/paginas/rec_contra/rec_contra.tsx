import { Link } from "react-router-dom";
import s1 from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/s1.png";
import s6 from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/s6.png";
import perfil from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/perfil.png";
import fondo from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/fondo.avif";
import "./rec_contra.css"; // tu archivo de estilos

export default function RecuperarContraseña() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="profile">
          <img src={perfil} alt="Perfil" className="profile-img" />
          <Link to="/">
          <span className="profile-name">SN-52</span>
          </Link>
        </div>
        <div className="header-buttons">
          <Link to="/register">
            <button className="btn" id="btnRegistro">REGISTRARSE</button>
          </Link>
          <Link to="/login">
            <button className="btn" id="btnInicio">INICIAR SESIÓN</button>
          </Link>
        </div>
      </header>

      {/* Fondo */}
      <div
        className="background"
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>

      {/* Título */}
      <h1 className="titulo">RECUPERAR CONTRASEÑA</h1>

      {/* Formulario */}
      <div className="form-container">
        {/* Adorno superior */}
        <img src={s1} alt="Adorno Superior" className="adorno adorno-top" />

        <form className="login-form">
          <label htmlFor="email">Email </label>
          <input type="email" id="email" placeholder="example@domain.com" />

          <label htmlFor="password">Password </label>
          <input type="password" id="password" placeholder="********" />

          <button className="log" type="submit">
            <span>Login</span>
          </button>
        </form>

        {/* Adorno inferior */}
        <img src={s6} alt="Adorno Inferior" className="adorno adorno-bottom" />
      </div>
    </div>
  );
}
