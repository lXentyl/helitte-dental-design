import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/resultados', label: 'Resultados' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="Helitte Dental Design" className="logo-img" />
        </Link>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <button
            className="btn btn-wa nav-cta-mobile"
            onClick={() => { openWhatsApp('general'); setMenuOpen(false) }}
          >
            Agendar Cita
          </button>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-outline nav-cta" onClick={() => openWhatsApp('general')}>
            Agendar Cita
          </button>
          <button
            className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
