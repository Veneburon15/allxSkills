import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='secciones'>
                <img src={Logo} alt="AllxSkillz Logo" width={120}/>
                <p>Tu Socio en el Desarrollo de Habilidades Blandas</p> 
                <p>(+54) 11 2540-4808</p>
                <div>
                    <i>Wpp</i>
                    <i>Mail</i>
                    <i>Linkedin</i>
                    <i>@</i>
                    <i>Ig</i>
                </div>
            </div>
            <div className='secciones'>
                <h3>Enlaces de interés</h3>
                <a>Sobre Nosotros</a>
                <a>¿Por qué Soft Skills?</a>
                <a>Contacta</a>
            </div>
            <div className='secciones'>
                <h2>Suscribete para novedades</h2>
                <input placeholder='Email'/>
                <button>flecha</button>
            </div>
            <hr/>
            <div>
                <a>Copyright © 2023 Allskills</a>
                <a>Terminos y Condiciones</a>
                <a>Privacidad</a>
            </div>
        </div>
    )
} 

export default Footer