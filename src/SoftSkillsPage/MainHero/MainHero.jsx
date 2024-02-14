import ScrollIcon from '../../Function_components/ScrollIcon/ScrollIcon'
import WhatsAppButton from '../../Function_components/WhatsappButton/WhatsappButton'
import './MainHero.css'
import { Link } from 'react-router-dom'

const MainHero = () => {
    return(
        <section className='mainSectionHero'>
            <div className='textDivSoft'>
                <h2 className='hiddenInPhone'>Desarrolla <p className='heroPinkText pinkTextUs'>Soft Skills,</p><br /> para alcanzar metas soñadas</h2>
                <h2 className='hiddenInPC'>Desarrolla <p className='heroPinkText'>Soft Skills, </p>alcanza tus metas</h2>
                <p className='hiddenInPhone'>Construye un perfil sólido y prepárate para destacar <br /> en el ámbito profesional que desees</p>
                <Link to='/contactanos'><button className="hiddenInPhone">¡Comunícate con nosotros!</button></Link>
                <Link to='/contactanos'><button className="hiddenInPC">Explora nuestros cursos</button></Link>
            </div>
            <ScrollIcon/>
            <WhatsAppButton/>
        </section>
    )
} 

export default MainHero
