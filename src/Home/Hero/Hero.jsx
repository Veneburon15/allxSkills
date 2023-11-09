import './Hero.css'

const Hero = () => { 
    return(
    <div className='heroDiv'> 
        <div className='heroText'> 
            <h1>Tu <p className='homeTextGradient'>Éxito Profesional</p><br/> comienza en AllxSkills</h1>
            <p>Aumenta tu potencial aprendiendo <br/> Habilidades Blandas de alto impacto</p> 
            <button className='homeHeroButton'>¡Comienza Ahora!</button>
        </div>
    </div> 
    );
}

export default Hero;
