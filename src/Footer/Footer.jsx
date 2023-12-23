import { Link } from 'react-router-dom'
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png'
import Arrow from '../Assets/Iconos/send-footerNewsletter.svg'
import './Footer.css'
import SocialMedia from './SocialMedia/SocialMedia'

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <section className='secciones'>
                <div className='footerSection1'>
                    <Link to='/' className='logoDiv'>
                        <img src={Logo} alt="Logo Allxskills" className='footerLogo'/>
                    </Link>
                    <p className='footerPartnerP body1'>Tu Socio en el Desarrollo de Soft Skills</p> 
                    <p className='phoneNumber body1'>(+54) 911 3921-4786</p>
                    <SocialMedia/>
                </div>
                <div className='footerSection2'>
                    <ul>
                        <li><Link to="/ofertaAcademica" className='body1'>Oferta Académica</Link></li>
                        <li><Link to='/' className='body1'>Sobre Nosotros</Link></li>
                        <li><Link to='/softSkills' className='body1'>¿Por qué Soft Skills?</Link></li>
                        <li><Link to='/contactanos' className='body1'>Contacto</Link></li>
                    </ul>
                </div>
                <div className='footerSection3'>
                    <h2 className='suscribeH2'>Suscríbete para novedades</h2>
                    <form className='emailInput'>
                        <label for="emailFooter" className='emailLabel'>
                            <input className="body1" placeholder='Correo' name='emailFooter' id='emailFooter'/>
                        </label>
                        <button className='submitFooter'><img src={Arrow} alt="Arrow Icon" className='arrowIcon'/></button>
                    </form>
                </div>
            </section>
            <section className='copyrights'>
                <p className='tag'>Copyright © 2023 AllxSkills</p>
                <ul className='belowRightSection'>
                    <li className='footerLi'><a href='#' className='tag'>Términos y Condiciones</a></li>
                    <li className='footerLi'><a href='#' className='tag'>Botón de arrepentimiento</a></li>
                </ul>
            </section>
        </footer>
    )
} 

export default Footer