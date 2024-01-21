import ScrollIcon from '../../Function_components/ScrollIcon/ScrollIcon'
import ButtonExplore from '../../Oferta Academica/HeroOferta/ButtonExplore/ButtonExplore'
import './NosotrosHead.css'
import WhatsappButton from '../../Function_components/WhatsappButton/WhatsappButton'

const NosotrosHead = () => {
    return(
        <section className="aboutUsHeadSection">
            <div>
                <h2 className='mainH2 headOferta'>Transformando <br /> Potencial en <span className='heroTextGradient headOferta'>Éxito</span></h2>
                <p className='heroTextAbout'>Descubre una trayectoria hacia el éxito profesional y <br className='hiddenInPhone'/> personal a través del <br className='hiddenInPC'/> desarrollo de Soft Skills.</p>
                <ButtonExplore/>
            </div> 
            <ScrollIcon/>
            <WhatsappButton/>
        </section>
    )
}

export default NosotrosHead