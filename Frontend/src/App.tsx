import React, { useState } from "react";

// Para que el código sea completamente autónomo y no dependa de archivos locales,
// se han reemplazado las importaciones de imágenes locales por URLs de imágenes de prueba.

const highlightsData = [
  { imgUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ba4?fit=crop&w=800&q=80', alt: 'Tight Race Ahead', text: 'Tight Race Ahead' },
  { imgUrl: 'https://images.unsplash.com/photo-1518770660434-45635f72e917?fit=crop&w=800&q=80', alt: 'The Historic Moment', text: 'The Historic Moment' },
  { imgUrl: 'https://images.unsplash.com/photo-1543360211-53697e884f09?fit=crop&w=800&q=80', alt: 'Celebrating Diversity', text: 'Celebrating Diversity' },
  { imgUrl: 'https://images.unsplash.com/photo-1533275716916-431835775c94?fit=crop&w=800&q=80', alt: 'NY Climate Demonstrations', text: 'NY Climate Demonstrations' },
  { imgUrl: 'https://images.unsplash.com/photo-1528460613867-27b003a3028c?fit=crop&w=800&q=80', alt: 'Busting the Crime Ring', text: 'Busting the Crime Ring' },
];

const socialIcons = {
  facebookIcon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
  instagramIcon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  xIcon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
  youtubeIcon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
  logoImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
};

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
          }
          
          .container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          
          /* HEADER STYLES */
          header {
            background: linear-gradient(90deg, #6eddd4 0%, #eaf3f3 100%);
            padding: 0;
          }
          
          .navbar-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 24px;
          }
          
          .navbar-logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .navbar-logo img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #fff;
          }
          
          .navbar-logo span {
            font-size: 1.5rem;
            font-weight: 700;
            color: #222;
            letter-spacing: 1px;
          }
          
          .navbar-actions {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .btn {
            background: #fff;
            color: #222;
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
            box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          }
          
          .btn:hover {
            background: #f0f0f0;
          }
          
          .menu-toggle {
            display: none;
            background: #fff;
            font-size: 1.5rem;
            padding: 5px 10px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          }
          
          .navbar-bottom {
            display: flex;
            justify-content: center;
            gap: 20px;
            background: #8ee0db;
            padding: 14px 0;
          }
          
          .navbar-bottom a {
            background: #5ecfc6;
            color: #222;
            text-decoration: none;
            padding: 8px 24px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 0.95rem;
            transition: background 0.2s, color 0.2s;
            box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          }
          
          .navbar-bottom a:hover {
            background: #4bb8ad;
            color: #fff;
          }
          
          /* MAIN CONTENT LAYOUT */
          .main-container {
            display: flex;
            flex: 1;
            padding: 20px;
            gap: 20px;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
          }
          
          .sidebar-left, .sidebar-right {
            width: 280px;
            position: sticky;
            top: 120px;
            height: fit-content;
            max-height: calc(100vh - 140px);
            overflow-y: auto;
          }
          
          .sidebar-left {
            order: 1;
          }
          
          .sidebar-right {
            order: 3;
          }
          
          .main-content {
            flex: 1;
            order: 2;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          /* SIDEBAR STYLES */
          .sidebar-section {
            background: #fff;
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          }
          
          .sidebar-section h3 {
            margin: 0 0 12px 0;
            font-size: 1.1rem;
            color: #1bc7b2;
            border-left: 4px solid #1bc7b2;
            padding-left: 8px;
          }
          
          .sidebar-search {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ddd;
            font-size: 1rem;
          }
          
          .pulse-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 12px;
          }
          
          .pulse-btn {
            background: #eafafa;
            border: none;
            border-radius: 20px;
            padding: 6px 12px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          
          .pulse-btn:hover {
            background: #c2f0ee;
          }
          
          .sidebar-desc {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #555;
          }
          
          .sidebar-tags, .redes-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .sidebar-tag, .redes-tag {
            background: #eafafa;
            color: #555;
            border-radius: 20px;
            padding: 6px 12px;
            font-size: 0.9rem;
          }
          
          .redes-tag {
            background: #1bc7b2;
            color: white;
          }
          
          .sidebar-social {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          
          .sidebar-social a {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f5f5f5;
            border-radius: 50%;
            transition: background 0.2s;
          }
          
          .sidebar-social a:hover {
            background: #e0e0e0;
          }
          
          .sidebar-social img {
            width: 20px;
            height: 20px;
            object-fit: contain;
          }
          
          .data-comment {
            font-size: 0.9rem;
            color: #777;
            font-style: italic;
            line-height: 1.4;
          }
          
          /* MAIN CONTENT STYLES */
          .featured-article, .text-name-award, .newsletter-signup, .data-comment-main, .young-weekend {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          }
          
          .featured-article h3, .text-name-award h3, .newsletter-signup h3, .young-weekend h3 {
            margin: 0 0 15px 0;
            font-size: 1.2rem;
            color: #1bc7b2;
          }
          
          .article-actions {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
          }
          
          .article-btn {
            background: #eafafa;
            border: none;
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          
          .article-btn:hover {
            background: #c2f0ee;
          }
          
          .featured-article img {
            width: 100%;
            border-radius: 10px;
            height: 200px;
            object-fit: cover;
            margin-top: 15px;
          }
          
          .award-items {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .award-item {
            padding: 12px;
            background: #f9f9f9;
            border-radius: 8px;
            border-left: 4px solid #1bc7b2;
          }
          
          .newsletter-actions {
            margin-bottom: 15px;
          }
          
          .newsletter-btn {
            background: #eafafa;
            border: none;
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          
          .newsletter-btn:hover {
            background: #c2f0ee;
          }
          
          .newsletter-message {
            text-align: center;
            padding: 20px;
            background: #1bc7b2;
            color: white;
            border-radius: 10px;
            font-weight: bold;
            font-size: 1.2rem;
          }
          
          .data-comment-main {
            font-style: italic;
            color: #777;
          }
          
          .young-weekend {
            text-align: center;
          }
          
          .young-weekend p {
            font-size: 1.1rem;
            font-weight: bold;
            color: #1bc7b2;
            margin: 10px 0 0 0;
          }
          
          /* HIGHLIGHTS STYLES */
          .highlights-container {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          }
          
          .highlights-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }
          
          .highlights-header-line {
            height: 2px;
            background-color: #1bc7b2;
            flex-grow: 1;
          }
          
          .highlights-title {
            font-size: 1.2rem;
            margin: 0 15px;
            color: #1bc7b2;
          }
          
          .highlights-wrapper {
            display: flex;
            overflow-x: auto;
            gap: 15px;
            padding: 10px 0;
            scrollbar-width: thin;
          }
          
          .highlights-wrapper::-webkit-scrollbar {
            height: 6px;
          }
          
          .highlights-wrapper::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 3px;
          }
          
          .highlight-item {
            flex: 0 0 auto;
            width: 160px;
            text-align: center;
          }
          
          .highlight-img {
            width: 100%;
            height: 100px;
            object-fit: cover;
            border-radius: 8px;
          }
          
          .highlight-text {
            font-size: 0.9rem;
            margin-top: 8px;
            color: #555;
          }
          
          /* RIGHT SIDEBAR HIGHLIGHTS */
          .highlights-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          
          .highlights-list .highlight-item {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
          }
          
          .highlights-list .highlight-img {
            width: 50px;
            height: 50px;
          }
          
          .highlights-list .highlight-text {
            margin: 0;
            font-size: 0.9rem;
          }
          
          /* FOOTER STYLES */
          .footer {
            background: linear-gradient(90deg, #6eddd4 0%, #eaf3f3 100%);
            padding: 30px 0;
            margin-top: 40px;
          }
          
          .footer-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .footer-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #222;
            margin: 0;
          }
          
          .footer-social-and-contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .footer-social {
            display: flex;
            gap: 15px;
          }
          
          .footer-social a {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border-radius: 50%;
            transition: transform 0.2s;
          }
          
          .footer-social a:hover {
            transform: translateY(-3px);
          }
          
          .footer-social img {
            width: 20px;
            height: 20px;
            object-fit: contain;
          }
          
          .footer-contact {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #222;
            font-size: 0.9rem;
          }
          
          .footer-contact a {
            color: #222;
            text-decoration: none;
          }
          
          .footer-contact a:hover {
            text-decoration: underline;
          }
          
          .footer-sep {
            font-weight: bold;
          }
          
          /* RESPONSIVE STYLES */
          @media (max-width: 1024px) {
            .main-container {
              flex-direction: column;
            }
            
            .sidebar-left, .sidebar-right {
              position: static;
              width: 100%;
              order: 1;
            }
            
            .main-content {
              order: 2;
            }
          }
          
          @media (max-width: 768px) {
            .navbar-top {
              padding: 10px 16px;
            }
            
            .navbar-actions .btn {
              display: none;
            }
            
            .menu-toggle {
              display: block;
            }
            
            .navbar-bottom {
              display: none;
              flex-direction: column;
              gap: 0;
              padding: 0;
            }
            
            .navbar-bottom.show {
              display: flex;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              z-index: 1000;
            }
            
            .navbar-bottom a {
              border-radius: 0;
              padding: 12px;
              text-align: center;
              border-bottom: 1px solid #7ad9d2;
            }
            
            .main-container {
              padding: 15px;
            }
            
            .pulse-actions {
              justify-content: center;
            }
            
            .sidebar-social {
              justify-content: center;
            }
            
            .footer-social-and-contact {
              flex-direction: column;
              text-align: center;
            }
            
            .footer-contact {
              flex-direction: column;
              gap: 5px;
            }
          }
          
          @media (max-width: 480px) {
            .navbar-logo span {
              font-size: 1.2rem;
            }
            
            .sidebar-section {
              padding: 15px;
            }
            
            .featured-article, .text-name-award, .newsletter-signup, .data-comment-main, .young-weekend {
              padding: 15px;
            }
            
            .footer {
              padding: 20px 0;
            }
            
            .footer-title {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
      
      <div className="container">
        {/* HEADER */}
        <header>
          {/* Barra superior */}
          <div className="navbar-top">
            <div className="navbar-logo">
              <img src={socialIcons.logoImage} alt="Perfil" />
              <span>SN-32</span>
            </div>
            <div className="navbar-actions">
              <button className="btn">REGISTRARSE</button>
              <button className="btn">INICIAR SESIÓN</button>
              <button
                className="menu-toggle"
                aria-label="Abrir menú"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Barra inferior */}
          <nav className={`navbar-bottom ${menuOpen ? "show" : ""}`}>
            <a href="#">DEPORTES</a>
            <a href="#">ARTE</a>
            <a href="#">CULTURA</a>
            <a href="#">BIENESTAR</a>
            <a href="#">REPORTES</a>
          </nav>
        </header>

        {/* CONTENEDOR PRINCIPAL */}
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
            {/* Featured Article */}
            <div className="featured-article">
              <h3>Featured Article</h3>
              <div className="article-actions">
                <button className="article-btn">Me gusto</button>
                <button className="article-btn">Highlights</button>
              </div>
              <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured" />
            </div>

            {/* Text Name Award */}
            <div className="text-name-award">
              <h3>Text Name Award</h3>
              <div className="award-items">
                <div className="award-item">
                  <span>The Internet Network</span>
                </div>
                <div className="award-item">
                  <span>Customing Diversity</span>
                </div>
                <div className="award-item">
                  <span>NY Climate Developments</span>
                </div>
              </div>
            </div>

            {/* Newsletter Sign Up */}
            <div className="newsletter-signup">
              <h3>Newsletter Sign Up</h3>
              <div className="newsletter-actions">
                <button className="newsletter-btn">Me gusto</button>
              </div>
              <div className="newsletter-message">
                <p>YOU WILL DO BIG THINGS</p>
              </div>
            </div>

            {/* Data Comment */}
            <div className="data-comment-main">
              <p>Data comment contains actual impacts as to sociedad, beneficial parameters y ejemplaría que requiere...</p>
            </div>

            {/* Young Weekend */}
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
    </>
  );
};

export default Home;