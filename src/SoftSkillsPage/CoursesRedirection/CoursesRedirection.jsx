import { Link } from 'react-router-dom'
import './CoursesRedirection.css'

const CoursesRedirection = () => {
    return(
        <section className='redirectionSection'>
            <div className='redirectionMainDiv'>
                <div className='divLeftRedirection'>
                    <h3 className='hiddenInPhone'>Inicia hoy el camino hacia <br /> tu Éxito Profesional</h3>
                    <p className='hiddenInPhone'>Únete a nuestra comunidad y desarrolla habilidades <br /> que te harán destacar en cualquier ámbito. Da el <br /> primer paso hacia un futuro brillante.</p>
                    <h3 className='hiddenInPC redirectionText'>Desarrolla habilidades que te harán destacar</h3>
                </div> 
                <Link to='/ofertaAcademica'>
                    <button className='redirectionButton'>Ver Oferta Académica</button>
                </Link>
            </div>
        </section>
    )
}

export default CoursesRedirection
