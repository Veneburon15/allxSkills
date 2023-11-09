import './Hero.css'

const Hero = () => { 
    return(
    <section className='heroDiv'> 
        <div className='heroText'> 
            <h1>Tu <p className='heroTextGradient'>Éxito Profesional</p><br/> comienza en AllxSkills</h1>
            <p>Aumenta tu potencial aprendiendo <br/> Habilidades Blandas de alto impacto</p> 
            <button className='homeHeroButton'>¡Comienza Ahora!</button>
            {/* Falta agregar el ícono, que indica que hay que hacer scroll */}
        </div>
    </section> 
    );
}

export default Hero;
