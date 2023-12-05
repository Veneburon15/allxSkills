import './ContactForm.css'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  return (
    <section className='contactFormMainSection'>
        <h2>¿En qué podemos ayudarte?</h2>
        <p>Si buscas más información o asesoría personalizada, <strong>nuestro equipo está listo</strong><br />para ayudarte en cada paso de tu viaje de aprendizaje.</p>
        <Link to='/contactanos'><button>¡Contáctanos Ahora!</button></Link>
    </section>
  )
}

export default ContactForm