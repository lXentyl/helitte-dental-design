import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { openWhatsApp } from '../utils/whatsapp'
import './HomePage.css'

const servicesPreview = [
  { num: '01', title: 'Diseño de Sonrisa', desc: 'Carillas de porcelana o resina para una armonía dental personalizada.', img: `${import.meta.env.BASE_URL}assets/service_smile_design.webp`, action: 'smile-design' },
  { num: '02', title: 'Implantes Dentales', desc: 'Implantes de titanio con coronas idénticas a dientes naturales.', img: `${import.meta.env.BASE_URL}assets/service_implants.webp`, action: 'implants' },
  { num: '03', title: 'Blanqueamiento Láser', desc: 'Brillo natural en una sola sesión con tecnología foto-activada.', img: `${import.meta.env.BASE_URL}assets/service_whitening.webp`, action: 'whitening' },
]

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-bg-wrap">
          <img src={`${import.meta.env.BASE_URL}assets/hero_clinic.webp`} alt="Clínica Helitte Dental Design" className="hero-bg" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="container hero-layout">
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-dot" />
              Estética Dental Premium en Santo Domingo
            </div>
            <h1 className="hero-title">
              Transformamos sonrisas<br />
              con <span className="hero-accent">precisión y arte</span>
            </h1>
            <p className="hero-desc">
              Odontología avanzada, diseño digital y materiales de última generación para crear la sonrisa que siempre soñaste.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-hero-primary" onClick={() => openWhatsApp('general')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
                Evaluación Gratuita
              </button>
              <Link to="/servicios" className="btn btn-hero-outline">
                Explorar Servicios
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <h3>Reserva tu Cita</h3>
            </div>
            <div className="hero-card-schedule">
              <div className="sched-row">
                <span className="sched-day">Lun — Vie</span>
                <span className="sched-time">9:00 AM – 7:00 PM</span>
              </div>
              <div className="sched-row">
                <span className="sched-day">Sábados</span>
                <span className="sched-time">9:00 AM – 1:00 PM</span>
              </div>
            </div>
            <div className="hero-card-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Plaza Intercaribe, Suite 210 · Piantini</span>
            </div>
            <button className="btn btn-wa hero-card-btn" onClick={() => openWhatsApp('general')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
              Agendar por WhatsApp
            </button>
          </div>
        </div>

        <div className="hero-stats-bar">
          <div className="container hero-stats-inner">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Sonrisas Transformadas</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Garantía Estética</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tratamientos</span>
            <h2 className="section-title">Servicios Especializados</h2>
            <p className="section-desc">Odontología enfocada en el detalle estético y el bienestar funcional de tu sonrisa.</p>
          </div>

          <div className="services-grid">
            {servicesPreview.map((s) => (
              <div className="service-card" key={s.num}>
                <div className="service-card-img">
                  <img src={s.img} alt={s.title} loading="lazy" />
                  <div className="service-card-overlay" />
                  <span className="service-number">{s.num}</span>
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <button className="service-link" onClick={() => openWhatsApp(s.action)}>
                    Consultar
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="services-preview-cta">
            <Link to="/servicios" className="btn btn-outline">
              Ver Todos los Servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Lista para transformar tu sonrisa?</h2>
          <p>Agenda tu evaluación gratuita y descubre el plan perfecto para ti.</p>
          <button className="btn" onClick={() => openWhatsApp('general')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
            Agendar Evaluación Gratuita
          </button>
        </div>
      </section>
    </motion.div>
  )
}
