import './HeroNosotros.css'
import TopImage from '../../Assets/Imagenes/topCarrouselAboutUs.jpg'
import CenterImage from '../../Assets/Imagenes/middleCarrouselAboutUs.jpg'
import BellowImage from '../../Assets/Imagenes/bellowCarrouselAboutUs.jpg'

const HeroNostros = () => {
    return(
        <section className="benefitsDisplaySection">
            <h3 className='h3_1'><span className='heroTextGradient h3'>Transformamos</span> el desempeño y el ambiente laboral</h3>
            <div className='displayContainer'>
                <div className='elementContainerDisplay firstDisplay'>
                    <img src={TopImage} alt="" className='leftElement hiddenInPhone'/>
                    <div className='rightELement innerDivUs'>
                        <h4>Mejora tu rendimiento laboral</h4>
                        <p>Esperamos que nuestros participantes experimenten <br className='hiddenInPhone'/> mejoras significativas en su rendimiento laboral a medida  <br className='hiddenInPhone'/>que aplican las habilidades adquiridas en su día a día.</p>
                    </div>
                </div>
                <div className='elementContainerDisplay secondDisplay'>
                    <img src={CenterImage} alt="" className='rightElement hiddenInPhone'/>
                    <div className='leftElement innerDivUs'>
                        <h4>Clima laboral positivo</h4>
                        <p>Creemos firmemente que las habilidades blandas <br className='hiddenInPhone'/> sólidas contribuyen a un ambiente de trabajo saludable. <br className='hiddenInPhone'/> Nos esforzamos no solo por mejorar el desempeño <br className='hiddenInPhone'/> individual, sino también por fortalecer la dinámica de <br className='hiddenInPhone'/> equipos y la cultura organizacional.</p>
                    </div>
                </div>
                <div className='elementContainerDisplay thirdDisplay'>
                    <img src={BellowImage} alt="" className='leftElement hiddenInPhone'/>
                    <div className='rightElement innerDivUs'>
                        <h4>Desarrollo personal sostenible</h4>
                        <p>Aspiramos a ser socios a largo plazo en el desarrollo <br className='hiddenInPhone'/> profesional de nuestros clientes, contribuyendo de <br className='hiddenInPhone'/> manera continua al crecimiento personal y organizacional.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroNostros