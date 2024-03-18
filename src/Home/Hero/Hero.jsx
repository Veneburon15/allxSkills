import ScrollIcon from '../../Function_components/ScrollIcon/ScrollIcon';
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => { 
    return(
        <section className='heroDiv'> 
            <div className='heroText'> 
                <h1>Tu <span className='heroTextGradient'>Éxito Profesional</span><br/> comienza en AllxSkills</h1>
                <p className='heroTextBottom'>Aumenta tu potencial apreniendo<br/> Habilidades Blandas de alto impacto </p> 
                <Link to='scroll-down' smooth={true} duration={500}><button className='homeHeroButton'>¡Comienza Ahora!</button></Link>
            </div>
            <ScrollIcon/>
        </section> 
    );
}

export default Hero;
