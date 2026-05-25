const PHONE = '18097084687';

const messages = {
  'smile-design': 'Hola Helitte Dental Design, estoy interesado/a en una consulta para Diseño de Sonrisa y carillas estéticas.',
  'implants': 'Hola Helitte Dental Design, me gustaría recibir información sobre Implantes Dentales.',
  'orthodontics': 'Hola Helitte Dental Design, quisiera información sobre Ortodoncia (brackets / alineadores invisibles).',
  'whitening': 'Hola Helitte Dental Design, me interesa un Blanqueamiento Dental Profesional. ¿Qué opciones tienen?',
  'cleaning': 'Hola Helitte Dental Design, me gustaría agendar una Limpieza Dental Ultrasónica.',
  'general': 'Hola Helitte Dental Design, me gustaría más información sobre sus servicios y agendar una evaluación.',
};

export function openWhatsApp(action = 'general') {
  const msg = messages[action] || messages.general;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
}

export function WhatsAppLink({ action = 'general', children, className, ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    openWhatsApp(action);
  };

  return (
    <a href="#" onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
