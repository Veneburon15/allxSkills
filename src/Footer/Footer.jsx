import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <section className='secciones'>
                <section className='footerSection1'>
                    <img src={Logo} alt="AllxSkillz Logo" className='footerLogo'/>
                    <p className='footerPartnerP text'>Tu Socio en el Desarrollo <br/> de Habilidades Blandas</p> 
                    <p className='phoneNumber text'>(+54) 911 3921-4786</p>
                    <ul>
                        <li><img src="#" alt="WhatsApp Icon"/></li>
                        <li><img src="#" alt="Email Icon"/></li>
                        <li><img src="#" alt="LinkedIn Icon"/></li>
                        <li><img src="#" alt="Threads Icon"/></li>
                        <li><img src="#" alt="Instagram Icon"/></li>
                    </ul>
                </section>
                <section className='footerSection2'>
                    <ul>
                        <li><a href="#" className='text'>Oferta Académica</a></li>
                        <li><a href='#' className='text'>Sobre Nosotros</a></li>
                        <li><a href='#' className='text'>¿Por qué Soft Skills?</a></li>
                        <li><a href='#' className='text'>Contacto</a></li>
                    </ul>
                </section>
                <section className='footerSection3'>
                        <h2 className='footerh2'>Suscríbete para novedades</h2>
                        <form className='emailInput'>
                            <label for="email" className='emailLabel'>
                                <input className="text" placeholder='Correo' id='emailFooter'/>
                            </label>
                            <input type="submit" name='submit' value={">"} id='submitFooter'/>
                        </form>
                </section>
            </section>
            <section className='copyrights'>
                <p className='text'>Copyright © 2023 Allskills</p>
                <ul className='belowRightSection'>
                    <li><a href='#' className='text'>Términos y Condiciones</a></li>
                    <li><a href='#' className='text'>Privacidad</a></li>
                </ul>
            </section>
        </footer>
    )
} 

export default Footer