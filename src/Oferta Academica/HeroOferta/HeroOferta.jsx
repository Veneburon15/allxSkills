import ScrollIcon from '../../Function_components/ScrollIcon/ScrollIcon'
import ButtonExplore from './ButtonExplore/ButtonExplore'
import './HeroOferta.css'
import WhatsappButton from '../../Function_components/WhatsappButton/WhatsappButton'

const HeroOferta = () => {
    return(
        <section className='heroSection'>
            <div className='heroMainDiv'>
                <h2 className="mainH2O hiddenInPhone">Es momento de descubrir <br /> tu <span className='heroTextGradient'>mejor versión</span></h2>
                <p className='mainHeroP hiddenInPhone'>Desarrolla las actitudes y hábitos que te impulsarán a <br /> destacar como profesional en todos los campos y roles.</p>
                <h2 className='mainH2O hiddenInPC'>Descubre tu <br /> <span className='heroTextGradient ofertaGradientPhone'> mejor versión </span></h2>
                <p className='mainHeroP hiddenInPC'> Desarrolla las actitudes y hábitos que te <br /> impulsarán a destacar como profesional <br /> en  todos los campos y roles.</p>
                <ButtonExplore/>
            </div>
            <ScrollIcon/>
            <WhatsappButton/>
        </section>
    )
}

export default HeroOferta