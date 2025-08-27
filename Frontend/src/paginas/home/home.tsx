import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./home.css"; // Estilos externos

// Datos de los highlights
const highlightsData = [
  { imgUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ba4?fit=crop&w=800&q=80', alt: 'Tight Race Ahead', text: 'Tight Race Ahead' },
  { imgUrl: 'https://images.unsplash.com/photo-1518770660434-45635f72e917?fit=crop&w=800&q=80', alt: 'The Historic Moment', text: 'The Historic Moment' },
  { imgUrl: 'https://images.unsplash.com/photo-1543360211-53697e884f09?fit=crop&w=800&q=80', alt: 'Celebrating Diversity', text: 'Celebrating Diversity' },
  { imgUrl: 'https://images.unsplash.com/photo-1533275716916-431835775c94?fit=crop&w=800&q=80', alt: 'NY Climate Demonstrations', text: 'NY Climate Demonstrations' },
  { imgUrl: 'https://images.unsplash.com/photo-1528460613867-27b003a3028c?fit=crop&w=800&q=80', alt: 'Busting the Crime Ring', text: 'Busting the Crime Ring' },
];

// Iconos sociales
const socialIcons = {
  facebookIcon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
  instagramIcon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  xIcon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
  youtubeIcon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
  logoImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
};

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container">
      {/* HEADER */}
      <header>
        <div className="navbar-top">
          <div className="navbar-logo">
            <Link to="/perfil">
            <img src={socialIcons.logoImage} alt="Perfil" />
            </Link>
            <span>SN-52</span>
          </div>
          <div className="navbar-actions">
            <Link to="/register">
              <button className="btn">REGISTRARSE</button>
            </Link>
            <Link to="/login">
              <button className="btn">INICIAR SESIÓN</button>
            </Link>
            <button
              className="menu-toggle"
              aria-label="Abrir menú"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>

        <nav className={`navbar-bottom ${menuOpen ? "show" : ""}`}>
          <a href="#">DEPORTES</a>
          <a href="#">ARTE</a>
          <a href="#">CULTURA</a>
          <a href="#">BIENESTAR</a>
          <a href="#">REPORTES</a>
        </nav>
      </header>

      {/* MAIN */}
      <div className="main-container">
        {/* Sidebar izquierda */}
        <aside className="sidebar-left">
          <div className="sidebar-section">
            <h3>Search</h3>
            <input type="text" placeholder="Search..." className="sidebar-search" />
          </div>

          <div className="sidebar-section">
            <h3>The Daily Pulse</h3>
            <div className="pulse-actions">
              <button className="pulse-btn">Facebook Article</button>
              <button className="pulse-btn">Me gusto</button>
              <button className="pulse-btn">Highlights</button>
            </div>
            <p className="sidebar-desc">
              Welcome to The Daily Pulse, you go to search and then listen more on insights analysis. 
              Whether your background is coming round this, in-depth lectures, or through providing evidence, 
              we deliver this article that matter next to you.
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Popular Tags</h3>
            <div className="sidebar-tags">
              <span className="sidebar-tag">No hay etiquetas aún.</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Redes</h3>
            <div className="redes-tags">
              <span className="redes-tag">DEPORTES</span>
              <span className="redes-tag">APPLE</span>
              <span className="redes-tag">OUTLURA</span>
              <span className="redes-tag">BIENESTAR</span>
            </div>
          </div>

          <div className="sidebar-section">
            <p className="data-comment">
              Data comment contains actual impacts as to sociedad, beneficial parameters y ejemplaría que requiere...
            </p>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="main-content">
          <div className="featured-article">
            <h3>Featured Article</h3>
            <div className="article-actions">
              <button className="article-btn">Me gujgjgto</button>
              <button className="article-btn">Highlights</button>
            </div>
            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured" />
          </div>

          <div className="text-name-award">
            <h3>Text Name Award</h3>
            <div className="award-items">
              <div className="award-item"><span>The Internet Network</span></div>
              <div className="award-item"><span>Customing Diversity</span></div>
              <div className="award-item"><span>NY Climate Developments</span></div>
            </div>
          </div>

          <div className="newsletter-signup">
            <h3>Newsletter Sign Up</h3>
            <div className="newsletter-actions">
              <button className="newsletter-btn">Me gusto</button>
            </div>
            <div className="newsletter-message">
              <p>YOU WILL DO BIG THINGS</p>
            </div>
          </div>

          <div className="data-comment-main">
            <p>
              Data comment contains actual impacts as to sociedad, beneficial parameters y ejemplaría que requiere...
            </p>
          </div>

          <div className="young-weekend">
            <h3>YOUNG WEEKEND</h3>
            <p>You will do big things</p>
          </div>
        </main>

        {/* Sidebar derecha */}
        <aside className="sidebar-right">
          <div className="sidebar-section">
            <h3>Highlights</h3>
            <div className="highlights-list">
              {highlightsData.slice(0, 3).map((item, index) => (
                <div key={index} className="highlight-item">
                  <img src={item.imgUrl} alt={item.alt} className="highlight-img" />
                  <span className="highlight-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-content">
            <h2 className="footer-title">SN-32</h2>
            <div className="footer-social-and-contact">
              <div className="footer-social">
                <a href="https://www.facebook.com/SENA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook SENA">
                  <img src={socialIcons.facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/senacomunica" target="_blank" rel="noopener noreferrer" aria-label="Instagram SENA">
                  <img src={socialIcons.instagramIcon} alt="Instagram" />
                </a>
                <a href="https://x.com/SENAComunica" target="_blank" rel="noopener noreferrer" aria-label="X SENA">
                  <img src={socialIcons.xIcon} alt="X" />
                </a>
                <a href="https://www.youtube.com/user/SENAcomunica" target="_blank" rel="noopener noreferrer" aria-label="YouTube SENA">
                  <img src={socialIcons.youtubeIcon} alt="YouTube" />
                </a>
              </div>
              <div className="footer-contact">
                <a href="mailto:SN_52@SENA.com">SN_52@SENA.com</a>
                <span className="footer-sep">·</span>
                <a href="tel:1234567890">123-456-7890</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
