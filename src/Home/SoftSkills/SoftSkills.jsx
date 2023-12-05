import './SoftSkills.css'
import { Link } from 'react-router-dom'

const SoftSkills = () => {
    return (
        <section className='softSection'>
            <div className='discovery'>
                <h2><p className='heroTextGradient soft'>Descubre el Poder</p> de las Habilidades Blandas</h2> 
                <p className='softText'>Las Soft Skills impulsan tu crecimiento profesional y personal. Aprende las habilidades que te harán destacar en un mundo cada vez más competitivo.</p> 
                <Link to='/softSkills'><button className='detailButton'>Más Detalles</button></Link>
            </div> 
        </section>
    )
}

export default SoftSkills