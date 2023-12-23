import ButtonExplore from '../../Oferta Academica/HeroOferta/ButtonExplore/ButtonExplore'
import './NosotrosHead.css'

const NosotrosHead = () => {
    return(
        <section className="aboutUsHeadSection">
            <div>
                <h2 className='mainH2'>Transformando <br /> Potencial en <span className='heroTextGradient'>Éxito</span></h2>
                <p className='heroTextAbout'>Descubre una trayectoria hacia el éxito profesional y <br /> personal a través del desarrollo de Soft Skills.</p>
                <ButtonExplore/>
            </div> 
        </section>
    )
}

export default NosotrosHead