import ScrollIcon from '../../Function_components/ScrollIcon/ScrollIcon'
import WhatsAppButton from '../../Function_components/WhatsappButton/WhatsappButton'
import './MainHero.css'
import { Link } from 'react-router-dom'

const MainHero = () => {
    return(
        <section className='mainSectionHero'>
            <div className='textDivSoft'>
                <h2>Desarrolla <p className='heroPinkText'>Soft Skills,</p><br /> para alcanzar metas soñadas</h2>
                <p>Construye un perfil sólido y prepárate para destacar <br /> en el ámbito profesional que desees</p>
                <Link to='/contactanos'><button className="headButton">¡Comunícate con nosotros!</button></Link>
            </div>
            <ScrollIcon/>
            <WhatsAppButton/>
        </section>
    )
} 

export default MainHero
