import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'
import './NosotrosPage.css'

const values = [
  { icon: '🔬', title: 'Tecnología 3D', desc: 'Escáneres intraorales y planificación computarizada para simular resultados antes de iniciar.' },
  { icon: '🛡️', title: 'Garantía Estética', desc: 'Color, forma y alineación exactamente como lo acordamos. Satisfacción garantizada.' },
  { icon: '🏥', title: 'Bioseguridad', desc: 'Protocolos de esterilización y control bacteriológico de primer nivel en todas las áreas.' },
  { icon: '🌿', title: 'Confort Total', desc: 'Instalaciones diseñadas como un spa dental para tu máxima relajación en cada visita.' },
]

const testimonials = [
  { quote: '"Dra. Daiana me diseñó carillas de porcelana que lucen tan naturales que nadie nota que las llevo. Solo me felicitan por lo bonita que es mi sonrisa. Trato de primera clase."', name: 'Sofía Rincón', role: 'Diseño de Sonrisa', rating: 5 },
  { quote: '"Tenía pánico de ponerme un implante, pero en Helitte fue rápido y libre de dolor. La tecnología y el cuidado del paciente son únicos en Santo Domingo."', name: 'Alejandro Gómez', role: 'Implantología', rating: 5 },
  { quote: '"El blanqueamiento y la limpieza profunda superaron mis expectativas. Quedé asombrada por la diferencia en una sola sesión. La clínica es elegante y muy limpia."', name: 'Camila Peguero', role: 'Estética Preventiva', rating: 5 },
]

export default function NosotrosPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <section className="page-banner">
        <h1>Nuestra Clínica</h1>
        <p>Donde la ciencia y el arte se unen para transformar sonrisas</p>
        <div className="breadcrumb">
          <Link to="/">Inicio</Link><span>/</span><span>Nosotros</span>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img src={`${import.meta.env.BASE_URL}assets/dentist_doctor.png`} alt="Dra. Daiana Ceballos" className="about-img" />
            <div className="exp-badge">
              <span className="exp-num">10+</span>
              <span className="exp-label">Años de Experiencia</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">Nuestra Clínica</span>
            <h2>Cuidando Cada Detalle de tu Sonrisa</h2>
            <p className="about-subtitle">Dra. Daiana Ceballos — Directora Clínica</p>
            <p>En <strong>Helitte Dental Design</strong> creemos que la odontología es una mezcla de ciencia médica y sensibilidad artística. Cada diseño de sonrisa se estudia a la medida de tu rostro, analizando simetría, tonalidad y armonía para lograr resultados naturales.</p>
            <p>Nuestra clínica cuenta con tecnología avanzada y sigue rigurosos estándares de bioseguridad, ofreciendo una experiencia cómoda y segura en el corazón de Santo Domingo.</p>
            <div className="about-features">
              {['Diseño Computarizado 3D', 'Materiales Biocompatibles', 'Bioseguridad Certificada', 'Atención Premium'].map(f => (
                <div className="feature-item" key={f}>
                  <div className="feature-check">✓</div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" onClick={() => openWhatsApp('general')}>Conoce Nuestro Equipo</button>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nuestros Valores</span>
            <h2 className="section-title">Filosofía de Trabajo</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonios</span>
            <h2 className="section-title">Lo Que Dicen Nuestros Pacientes</h2>
          </div>
          <div className="testimonials-slider">
            {testimonials.map((t, i) => (
              <div
                className={`testimonial-card ${i === current ? 'active' : ''}`}
                key={i}
              >
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                  <div className="testimonial-rating">{'★'.repeat(t.rating)}</div>
                </div>
              </div>
            ))}
            <div className="testimonial-controls">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Lista para conocernos?</h2>
          <p>Visita nuestra clínica en Piantini y descubre un nuevo estándar de cuidado dental.</p>
          <button className="btn" onClick={() => openWhatsApp('general')}>Agendar Visita</button>
        </div>
      </section>
    </motion.div>
  )
}
