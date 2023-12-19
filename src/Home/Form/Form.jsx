import { Link } from 'react-router-dom'
import './Form.css'

const Form = () => {
    return (
        <section className='contactSectionForm'>
            <div>
                <h2>¿En qué podemos ayudarte?</h2>
                <p>¿Tienes alguna duda? ¡Contáctanos!</p>
            </div> 
            <Link to='/contactanos'>
                <button className='heroButton'>Contáctanos</button>
            </Link>
        </section>
    )
}

export default Form