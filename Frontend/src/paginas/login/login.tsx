import "./login.css";
import s1 from "/Users/dilan/Proyecto-SN-52/Frontend/src/assets/Img/s1.png";
import s2 from "/Users/dilan/Proyecto-SN-52/Frontend/src/assets/Img/s2.png";
import perfil from "/Users/dilan/Proyecto-SN-52/Frontend/src/assets/Img/perfil.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
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
          <button className="btn">INICIAR SESIÓN</button>
        </div>
      </header>

      {/* Main */}
      <main>
        <h1 className="main-title">INICIO SESIÓN</h1>
        <div className="login-box">
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
            <Link to="/rec_contra" className="forgot-link">
            RECUPERAR CONTRASEÑA
            </Link>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>

        {/* Imágenes decorativas */}
        <img src={s2} className="decor-left" alt="" />
        <img src={s1} className="decor-right" alt="" />
      </main>
    </div>
  );
}
