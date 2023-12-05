import './HeroOferta.css'
import { Link } from 'react-scroll'

const HeroOferta = () => {
    return(
        <section className='heroSection'>
            <div className='heroMainDiv'>
                <h2 className="mainH2">Es momento de descubrir <br /> tu <span className='heroTextGradient'>mejor versión</span></h2>
                <p className='mainHeroP'>Desarrolla las actitudes y hábitos que te impulsarán a <br /> destacar como profesional en todos los campos y roles.</p>
                <Link to='explora' smooth={true} duration={500}><button className="headButton">Explora nuestros cursos</button></Link>
            </div>
        </section>
    )
}

export default HeroOferta