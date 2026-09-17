import { useState, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { openBooking } from '../../utils/booking';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header ${isScrolled ? 'header--scrolled' : 'header--top'}`}
        role="banner"
      >
        <div className="header__container container">
          <div className="header__inner">
            <a href="#" className="header__logo" aria-label="Raiz Beleza & Estética — Início">
              <img
                src={siteConfig.brand.logo}
                alt={`Logotipo ${siteConfig.brand.name}`}
                className="header__logo-img"
                width={130}
                height={65}
              />
            </a>

            <nav className="header__nav" aria-label="Navegação principal">
              <ul className="header__nav-list">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="header__nav-link link-underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__actions">

              <button
                className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                <span className="header__menu-icon">
                  <span className="header__menu-line"></span>
                  <span className="header__menu-line"></span>
                  <span className="header__menu-line"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleNavClick}
      />
    </>
  );
}
