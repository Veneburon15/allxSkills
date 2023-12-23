import './NosotrosOferta.css'
import BrilliantStar from '../../Assets/Iconos/iconoir_bright-star.svg'
import Magic from '../../Assets/Iconos/iconoir_magic-wand.svg'
import Bounce from '../../Assets/Iconos/iconoir_bounce-right.svg'
import Target from '../../Assets/Iconos/iconoir_archery.svg'
import Cloud from '../../Assets/Iconos/iconoir_cloud-desync.svg'
import Brain from '../../Assets/Iconos/iconoir_brain.svg'

const NosotrosOferta = () => {
    return(
        <section className='aboutUsOfferSection'>
            <h3 className='h3'>¿Qué te ofrece <span className='heroTextGradient h3'>AllxSkills</span>?</h3>
            <div className='elementContainer'>
                <div className='aboutUsIconContainer'>
                    <img src={Magic} alt="Ícono Varita Mágica" />
                    <h4 className='body3'>Programos Personalizados</h4>
                    <p className='body1'>Diseñamos programas adaptados a las necesidades específicas de cada cliente.</p>
                </div>
                <div className='aboutUsIconContainer'>
                    <img src={Bounce} alt="Ícono Pelota que rebota" />
                    <h4 className='body3'>Metodología Interactiva</h4>
                    <p className='body1'>Incorporamos simulaciones para brindar una experiencia de aprendizaje práctica y significativa.</p>
                </div>
                <div className='aboutUsIconContainer'>
                    <img src={Target} alt="Ícono Flecha en una Diana" />
                    <h4 className='body3'>Facilitadores Expertos</h4>
                    <p className='body1'>Su enfoque es guiar a los participantes fomentando un ambiente de aprendizaje positivo y colaborativo.</p>
                </div>
                <div className='aboutUsIconContainer'>
                    <img src={Cloud} alt="Ícono Nube con símbolo de actualización/sincronización" />
                    <h4 className='body3'>Actualización Continua</h4>
                    <p className='body1'>Nos actualizamos constantemente para ofrecer programas con las últimas tendencias.</p>
                </div>
                <div className='aboutUsIconContainer'>
                    <img src={Brain} alt="Ícono Cerebro" />
                    <h4 className='body3'>Enfoque Holístico</h4>
                    <p className='body1'>Desarrollamos habilidades que se integran efectivamente en diversas situaciones.</p>
                </div>
                <div className='aboutUsIconContainer'>
                    <img src={BrilliantStar} alt="Ícono Estrella Brillante" />
                    <h4 className='body3'>Innovacion</h4>
                    <p className='body1'>Exploramos nuevos enfoques, asegurando que el curso refleje lo último en metodos educativos.</p>
                </div>
            </div>
        </section>
    )
}

export default NosotrosOferta