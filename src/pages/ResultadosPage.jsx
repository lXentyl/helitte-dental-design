import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsapp'
import './ResultadosPage.css'

const steps = [
  { num: '01', title: 'Evaluación Digital', desc: 'Escáner 3D completo de tu sonrisa actual y análisis facial detallado.' },
  { num: '02', title: 'Diseño Personalizado', desc: 'Simulación digital del resultado final adaptada a la armonía de tu rostro.' },
  { num: '03', title: 'Preparación', desc: 'Tratamiento preciso con materiales premium importados de alta durabilidad.' },
  { num: '04', title: 'Resultado Final', desc: 'Tu nueva sonrisa perfecta, natural y diseñada a tu medida.' },
]

export default function ResultadosPage() {
  const [sliderPos, setSliderPos] = useState(50)
  const sliderRef = useRef(null)
  const dragging = useRef(false)

  const adjust = useCallback((clientX) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    let pos = ((clientX - rect.left) / rect.width) * 100
    pos = Math.max(2, Math.min(98, pos))
    setSliderPos(pos)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseUp = () => { dragging.current = false }
  const onMouseMove = (e) => { if (dragging.current) adjust(e.clientX) }
  const onTouchMove = (e) => { if (dragging.current && e.touches.length > 0) adjust(e.touches[0].clientX) }
  const onClick = (e) => { if (!e.target.closest('.ba-handle')) adjust(e.clientX) }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      onMouseUp={onMouseUp} onMouseMove={onMouseMove}
      onTouchEnd={onMouseUp} onTouchMove={onTouchMove}
    >
      <section className="page-banner">
        <h1>Resultados Reales</h1>
        <p>Casos de transformación en nuestra clínica</p>
        <div className="breadcrumb">
          <Link to="/">Inicio</Link><span>/</span><span>Resultados</span>
        </div>
      </section>

      <section className="resultados-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Resultados</span>
            <h2 className="section-title">Casos de Transformación</h2>
            <p className="section-desc">Desliza la barra para comparar el antes y después de un tratamiento en nuestra clínica.</p>
          </div>

          <div className="ba-wrapper">
            <div className="ba-slider" ref={sliderRef} onClick={onClick}>
              <img src={`${import.meta.env.BASE_URL}assets/smile_perfect.png`} alt="Después" className="ba-img-after" />
              <span className="ba-label ba-label-after">Diseño Final</span>

              <div className="ba-resize" style={{ width: `${sliderPos}%` }}>
                <img src={`${import.meta.env.BASE_URL}assets/smile_perfect.png`} alt="Antes" className="ba-img-before" style={{ filter: 'saturate(0.3) brightness(0.85)' }} />
                <span className="ba-label ba-label-before">Estado Inicial</span>
              </div>

              <div className="ba-handle" style={{ left: `${sliderPos}%` }}
                onMouseDown={onMouseDown}
                onTouchStart={() => { dragging.current = true }}
              >
                <div className="ba-handle-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="21" y1="12" x2="3" y2="12"/>
                    <polyline points="8 17 3 12 8 7"/>
                    <polyline points="16 7 21 12 16 17"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="ba-info">Desliza de izquierda a derecha para comparar los detalles.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Proceso</span>
            <h2 className="section-title">Nuestro Proceso de Diseño</h2>
          </div>
          <div className="process-timeline">
            {steps.map((s, i) => (
              <div className="process-step" key={i}>
                <div className="step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Quieres resultados como estos?</h2>
          <p>Agenda tu evaluación gratuita y comienza tu transformación.</p>
          <button className="btn" onClick={() => openWhatsApp('smile-design')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/></svg>
            Consultar Diseño de Sonrisa
          </button>
        </div>
      </section>
    </motion.div>
  )
}
