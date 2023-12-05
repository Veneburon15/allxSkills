import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => { 
    return(
        <section className='heroDiv'> 
            <div className='heroText'> 
                <h1>Tu <p className='heroTextGradient'>Éxito Profesional</p><br/> comienza en AllxSkills</h1>
                <p className='heroTextBottom'>Desarrolla tu capacidad maximizando habilidades sociales y <br/> emocionales clave para potenciar tu éxito personal y profesional.</p> 
                <Link to='scroll-down' smooth={true} duration={500}><button className='homeHeroButton'>¡Comienza Ahora!</button></Link>
                {/* Falta agregar el ícono, que indica que hay que hacer scroll */}
            </div>
        </section> 
    );
}

export default Hero;
