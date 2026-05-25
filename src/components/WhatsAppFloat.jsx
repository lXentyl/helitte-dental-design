import { openWhatsApp } from '../utils/whatsapp'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  return (
    <button className="wa-float" onClick={() => openWhatsApp('general')} aria-label="WhatsApp">
      <span className="wa-tooltip">¿Necesitas ayuda?</span>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z"/>
      </svg>
    </button>
  )
}
