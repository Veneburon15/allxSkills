import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <section className='secciones'>
                <img src={Logo} alt="AllxSkillz Logo" width={120}/>
                <p>Tu Socio en el Desarrollo de Habilidades Blandas</p> 
                <p>(+54) 911 3921-4786</p>
                <ul>
                    <li><img src="#" alt="WhatsApp Icon"/>WhatsApp</li>
                    <li><img src="#" alt="Email Icon"/>Email</li>
                    <li><img src="#" alt="LinkedIn Icon"/>LinkedIn</li>
                    <li><img src="#" alt="Threads Icon"/>Threads</li>
                    <li><img src="#" alt="Instagram Icon"/>Instagram</li>
                </ul>
            </section>
            <section className='secciones'>
                <h3>Enlaces de interés</h3>
                <ul>
                    <li><a href="#">Oferta Académica</a></li>
                    <li><a href='#'>Sobre Nosotros</a></li>
                    <li><a href='#'>¿Por qué Soft Skills?</a></li>
                    <li><a href='#'>Contacta</a></li>
                </ul>
            </section>
            <section className='secciones'>
                <h2>Suscribete para novedades</h2>
                <input placeholder='Email'/>
                <button>flecha</button>
            </section>
            {/* <hr/> */}
            <section>
                <p>Copyright © 2023 Allskills</p>
                <a>Terminos y Condiciones</a>
                <a>Privacidad</a>
            </section>
        </footer>
    )
} 

export default Footer