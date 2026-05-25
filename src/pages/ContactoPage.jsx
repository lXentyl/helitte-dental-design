import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'
import './ContactoPage.css'

const schedule = [
  { day: 'Lunes', time: '9:00 AM – 7:00 PM' },
  { day: 'Martes', time: '9:00 AM – 7:00 PM' },
  { day: 'Miércoles', time: '9:00 AM – 7:00 PM' },
  { day: 'Jueves', time: '9:00 AM – 7:00 PM' },
  { day: 'Viernes', time: '9:00 AM – 7:00 PM' },
  { day: 'Sábado', time: '9:00 AM – 1:00 PM' },
  { day: 'Domingo', time: 'Cerrado', closed: true },
]

export default function ContactoPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <section className="page-banner">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte a lograr la sonrisa perfecta</p>
        <div className="breadcrumb">
          <Link to="/">Inicio</Link><span>/</span><span>Contacto</span>
        </div>
      </section>

      <section className="contacto-section">
        <div className="container contacto-grid">
          <div className="contacto-info">
            <span className="section-tag">Contacto</span>
            <h2>¿Lista para tu nueva sonrisa?</h2>
            <p className="contacto-desc">Contáctanos por teléfono, WhatsApp o visítanos en Piantini. Diseñaremos el plan perfecto para ti.</p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Av. Lope de Vega esq. Rafael Augusto Sánchez,<br/>Plaza Intercaribe #33, 2do Piso, Suite 210,<br/>Piantini, Santo Domingo, R.D.</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Teléfonos</h4>
                  <p><a href="tel:+18094753412">809-475-3412</a></p>
                  <p><a href="tel:+18097084687">809-708-4687</a> (WhatsApp)</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Correo</h4>
                  <p><a href="mailto:info@helittedentaldesign.com">info@helittedentaldesign.com</a></p>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com/?q=Plaza+Intercaribe,+Piantini,+Santo+Domingo"
               target="_blank" rel="noopener noreferrer" className="map-card">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="map-icon">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div>
                <h4>Ver en Google Maps</h4>
                <p>Plaza Intercaribe, Suite 210, Piantini</p>
              </div>
              <span className="btn btn-primary btn-sm">Abrir Mapa</span>
            </a>
          </div>

          <div className="hours-card">
            <h3>Horarios de Atención</h3>
            <div className="hours-list">
              {schedule.map(({ day, time, closed }) => (
                <div className="hours-row" key={day}>
                  <span className="hours-day">{day}</span>
                  <span className={`hours-time ${closed ? 'hours-closed' : ''}`}>{time}</span>
                </div>
              ))}
            </div>
            <div className="hours-cta">
              <p>¿Prefieres agendar directo?</p>
              <button className="btn btn-wa" style={{ width: '100%', justifyContent: 'center' }} onClick={() => openWhatsApp('general')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
                Agendar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Síguenos en Instagram</h2>
          <p>Mira nuestros casos reales y últimas novedades</p>
          <a href="https://www.instagram.com/helittedentaldesign/"
             target="_blank" rel="noopener noreferrer" className="btn btn-outline instagram-btn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @helittedentaldesign
          </a>
        </div>
      </section>
    </motion.div>
  )
}
