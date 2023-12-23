import './HeroNosotros.css'
import TopImage from '../../Assets/Imagenes/topCarrouselAboutUs.jpg'
import CenterImage from '../../Assets/Imagenes/middleCarrouselAboutUs.jpg'
import BellowImage from '../../Assets/Imagenes/bellowCarrouselAboutUs.jpg'

const HeroNostros = () => {
    return(
        <section className="benefitsDisplaySection">
            <h3 className='h3_1'><span className='heroTextGradient h3'>Transformando</span> el Desempeño y el Ambiente Laboral</h3>
            <div className='displayContainer'>
                <div className='elementContainerDisplay firstDisplay'>
                    <img src={TopImage} alt="" />
                    <div>
                        <h4>Mejora del rendimiento laboral</h4>
                        <p>Esperamos que nuestros participantes experimenten <br /> mejoras significativas en su rendimiento laboral a medida  <br />que aplican las habilidades adquiridas en su día a día.</p>
                    </div>
                </div>
                <div className='elementContainerDisplay secondDisplay'>
                    <img src={CenterImage} alt="" />
                    <div>
                        <h4>Clima laboral positivo</h4>
                        <p>Creemos firmemente que las habilidades blandas <br /> sólidas contribuyen a un ambiente de trabajo saludable. <br /> Nos esforzamos no solo por mejorar el desempeño <br /> individual, sino también por fortalecer la dinámica de <br /> equipos y la cultura organizacional.</p>
                    </div>
                </div>
                <div className='elementContainerDisplay thirdDisplay'>
                    <img src={BellowImage} alt="" />
                    <div>
                        <h4>Desarrollo profesional sostenible</h4>
                        <p>Aspiramos a ser socios a largo plazo en el desarrollo <br /> profesional de nuestros clientes, contribuyendo de <br /> manera continua al crecimiento personal y organizacional.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroNostros