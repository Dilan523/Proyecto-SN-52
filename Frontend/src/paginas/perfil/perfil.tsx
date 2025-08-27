import { Link } from "react-router-dom";
import "./perfil.css";

// Importar imágenes de decoración
import s1 from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/s1.png";
import s5 from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/s5.png";
import s6 from "/Users/Aprendiz/Proyecto-SN-52/Frontend/src/assets/Img/s6.png";

const Perfil: React.FC = () => {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src="https://i.pravatar.cc/100" alt="logo" />
          <Link to="/">
          <span className="logo-text">SN-52</span>
          </Link>
        </div>
        <nav>
          <Link to="/register" className="nav-btn">
            Registrarse
          </Link>
          <Link to="/login" className="nav-btn">
            Iniciar Sesión
          </Link>
        </nav>
      </header>

     <img src={s1} alt="decoración 1" className="decoracion decoracion-left" />
     <img src={s5} alt="decoración 2" className="decoracion decoracion-right" />
     <img src={s6} alt="decoración 3" className="decoracion decoracion-bottom" />


      {/* PERFIL */}
      <section className="profile">
        <div className="profile-img">
          <img src="https://i.pravatar.cc/200" alt="perfil" />
        </div>
        <button className="btn-change">Cambiar Foto</button>
      </section>

      {/* FORMULARIO */}
      <section className="contact">
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" type="text" placeholder="Nombre" required />

          <label htmlFor="apellidos">Apellidos</label>
          <input id="apellidos" type="text" placeholder="Apellidos" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" required />

          <button type="submit" className="form-btn">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Perfil;