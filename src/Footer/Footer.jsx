import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import LinkedIn from '../Assets/Iconos/LinkedIn-footerLogo.svg'
import Facebook from '../Assets/Iconos/Facebook-footerLogo.svg'
import WhatsApp from '../Assets/Iconos/WhatsApp-footerLogo.svg'
import Email from '../Assets/Iconos/Email-footerLogo.svg'
import Instagram from '../Assets/Iconos/Instagram-footerLogo.svg'
import Arrow from '../Assets/Iconos/send-footerNewsletter.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <section className='secciones'>
                <section className='footerSection1'>
                    <img src={Logo} alt="AllxSkillz Logo" className='footerLogo'/>
                    <p className='footerPartnerP body1'>Tu Socio en el Desarrollo de Soft Skills</p> 
                    <p className='phoneNumber body1'>(+54) 911 3921-4786</p>
                    <ul>
                        <li><img src={WhatsApp} alt="WhatsApp Icon" className='footerIcon'/></li>
                        <li><img src={Email} alt="Email Icon" className='footerIcon'/></li>
                        <li><img src={Instagram} alt="Instagram Icon" className='footerIcon'/></li>
                        <li><img src={LinkedIn} alt="LinkedIn Icon" className='footerIcon linkedIn'/></li>
                        <li><img src={Facebook} alt="Facebook Icon" className='footerIcon'/></li>
                    </ul>
                </section>
                <section className='footerSection2'>
                    <ul>
                        <li><a href="#" className='body1'>Oferta Académica</a></li>
                        <li><a href='#' className='body1'>Sobre Nosotros</a></li>
                        <li><a href='#' className='body1'>¿Por qué Soft Skills?</a></li>
                        <li><a href='#' className='body1'>Contacto</a></li>
                    </ul>
                </section>
                <section className='footerSection3'>
                        <h2 className='suscribeH2'>Suscríbete para novedades</h2>
                        <form className='emailInput'>
                            <label for="email" className='emailLabel'>
                                <input className="body1" placeholder='Correo' id='emailFooter'/>
                            </label>
                            <button className='submitFooter'><img src={Arrow} alt="Arrow Icon" className='arrowIcon'/></button>
                        </form>
                </section>
            </section>
            <section className='copyrights'>
                <p className='tag'>Copyright © 2023 Allskills</p>
                <ul className='belowRightSection'>
                    <li><a href='#' className='tag'>Términos y Condiciones</a></li>
                    <li><a href='#' className='tag'>Privacidad</a></li>
                </ul>
            </section>
        </footer>
    )
} 

export default Footer