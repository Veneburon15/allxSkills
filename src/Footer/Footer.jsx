import { Link } from 'react-router-dom'
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png'
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
                    <Link to='/' className='logoDiv'>
                        <img src={Logo} alt="Logo Allxskills" className='footerLogo'/>
                    </Link>
                    <p className='footerPartnerP body1'>Tu Socio en el Desarrollo de Soft Skills</p> 
                    <p className='phoneNumber body1'>(+54) 911 3921-4786</p>
                    <ul>
                        <li><a href='#' target='_blank'><img src={WhatsApp} alt="WhatsApp Icon" className='footerIcon'/></a></li>
                        <li><a href='#' target='_blank'><img src={Email} alt="Email Icon" className='footerIcon'/></a></li>
                        <li><a href='#' target='_blank'><img src={Instagram} alt="Instagram Icon" className='footerIcon'/></a></li>
                        <li><a href='#' target='_blank'><img src={LinkedIn} alt="LinkedIn Icon" className='footerIcon linkedIn'/></a></li>
                        <li><a href='#' target='_blank'><img src={Facebook} alt="Facebook Icon" className='footerIcon'/></a></li>
                    </ul>
                </section>
                <section className='footerSection2'>
                    <ul>
                        <li><Link to="/ofertaAcademica" className='body1'>Oferta Académica</Link></li>
                        <li><Link to='/' className='body1'>Sobre Nosotros</Link></li>
                        <li><Link to='/' className='body1'>¿Por qué Soft Skills?</Link></li>
                        <li><Link to='/' className='body1'>Contacto</Link></li>
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