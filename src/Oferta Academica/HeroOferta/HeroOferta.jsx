import ButtonExplore from './ButtonExplore/ButtonExplore'
import './HeroOferta.css'

const HeroOferta = () => {
    return(
        <section className='heroSection'>
            <div className='heroMainDiv'>
                <h2 className="mainH2">Es momento de descubrir <br /> tu <span className='heroTextGradient'>mejor versión</span></h2>
                <p className='mainHeroP'>Desarrolla las actitudes y hábitos que te impulsarán a <br /> destacar como profesional en todos los campos y roles.</p>
                <ButtonExplore/>
            </div>
        </section>
    )
}

export default HeroOferta