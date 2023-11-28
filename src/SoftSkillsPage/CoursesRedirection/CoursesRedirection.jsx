import { Link } from 'react-router-dom'
import './CoursesRedirection.css'

const CoursesRedirection = () => {
    return(
        <section className='redirectionSection'>
            <div className='redirectionMainDiv'>
                <div className='divLeftRedirection'>
                    <h3>Inicia hoy el camino hacia <br /> tu Éxito Profesional</h3>
                    <p>Únete a nuestra comunidad y desarrolla habilidades <br /> que te harán destacar en cualquier ámbito. Da el <br /> primer paso hacia un futuro brillante.</p>
                </div> 
                <Link to='/ofertaAcademica'>
                    <button className='redirectionButton'>Ver Oferta Académica</button>
                </Link>
            </div>
        </section>
    )
}

export default CoursesRedirection
