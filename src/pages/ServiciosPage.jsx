import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'
import './ServiciosPage.css'

const services = [
  { num: '01', title: 'Diseño de Sonrisa', desc: 'Transformación completa con carillas de porcelana o resina para lograr armonía dental, personalizada a tu rostro.', img: `${import.meta.env.BASE_URL}assets/service_smile_design.webp`, action: 'smile-design' },
  { num: '02', title: 'Implantes Dentales', desc: 'Recupera funcionalidad y estética con implantes de titanio y coronas de circonio idénticas a dientes naturales.', img: `${import.meta.env.BASE_URL}assets/service_implants.webp`, action: 'implants' },
  { num: '03', title: 'Blanqueamiento Láser', desc: 'Brillo natural para tu esmalte en una sola sesión con blanqueamiento foto-activado seguro y duradero.', img: `${import.meta.env.BASE_URL}assets/service_whitening.webp`, action: 'whitening' },
  { num: '04', title: 'Ortodoncia Estética', desc: 'Brackets estéticos de zafiro o alineadores invisibles para corrección de mordida discreta y cómoda.', img: `${import.meta.env.BASE_URL}assets/service_orthodontics.webp`, action: 'orthodontics' },
  { num: '05', title: 'Limpieza Ultrasónica', desc: 'Profilaxis profunda con ultrasonidos, micro-pulido, eliminación de sarro y aplicación de flúor.', img: `${import.meta.env.BASE_URL}assets/service_cleaning.webp`, action: 'cleaning' },
  { num: '06', title: 'Odontología General', desc: 'Diagnóstico completo, restauraciones estéticas en resina, endodoncia y cuidado preventivo de rutina.', img: `${import.meta.env.BASE_URL}assets/service_general.webp`, action: 'general' },
]

export default function ServiciosPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <section className="page-banner">
        <h1>Nuestros Servicios</h1>
        <p>Tratamientos especializados con tecnología de última generación</p>
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <span>Servicios</span>
        </div>
      </section>

      <section className="servicios-full">
        <div className="container">
          <div className="servicios-grid">
            {services.map((s) => (
              <div className="servicio-card" key={s.num}>
                <div className="servicio-card-img">
                  <img src={s.img} alt={`${s.title} — Helitte Dental Design`} loading="lazy" />
                  <div className="servicio-card-overlay" />
                  <span className="servicio-number">{s.num}</span>
                </div>
                <div className="servicio-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <button className="btn btn-outline btn-sm" onClick={() => openWhatsApp(s.action)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
                    Consultar por WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿No estás seguro/a qué tratamiento necesitas?</h2>
          <p>Agenda una evaluación gratuita y te asesoraremos personalmente.</p>
          <button className="btn" onClick={() => openWhatsApp('general')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
            Solicitar Evaluación Gratuita
          </button>
        </div>
      </section>
    </motion.div>
  )
}
