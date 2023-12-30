import SocialMedia from '../../Function_components/SocialMedia/SocialMedia'
import SendArrow from '../../Assets/Iconos/send-footerNewsletter.svg'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='contactFormSection'>
            <div className='formContainer'>
                <div className='formChildren'>
                    <h1 className='heroTextGradient contactH1'>¡Hola! ¿Podemos ayudarte?</h1>
                    <form action="" className='contactForm'>
                        <div className='topFormDiv'>
                            <label htmlFor="nombre">
                                <input type="text" placeholder="Nombre Completo*" name="nombre" id='nombre' className='body1'/> 
                            </label>
                            <label htmlFor="telefono">
                                <input type="tel" placeholder="Teléfono" name="telefono" id='telefono' className='body1'/>
                            </label>
                        </div>
                        <label htmlFor="contactEmail">
                            <input type="text" placeholder="Correo*" name="contactEmail" id='contactEmail' className='body1 emailFormInput'/>
                        </label>
                        <label htmlFor="message" className='messageFormLabel'>
                            <input type="text" placeholder="Mensaje*" name="message" id='message' className='body1 messageFormInput'/>
                        </label>
                        <div className='belowFormDiv'>
                            <div className='belowTextDiv'>
                                <p>* Indica que los campos son obligatorios</p> 
                                <p>Al hacer click en enviar autorizas el uso de datos personales</p> 
                            </div>
                            <div className='sendForm'>
                                <input type="submit" value="Enviar"/>
                                <img src={SendArrow} alt="" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='socialMediaDiv'>
                    <h3>Síguenos en Redes Sociales</h3>
                    <SocialMedia/>
                </div>
            </div>
        </section>
    )
}

export default Formulario