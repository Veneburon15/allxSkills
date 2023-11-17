import WhatsApp  from '../../Assets/Iconos/WhatsApp-footerLogo.svg'
import Email from '../../Assets/Iconos/Email-footerLogo.svg'
import Instagram from '../../Assets/Iconos/Instagram-footerLogo.svg'
import LinkedIn from '../../Assets/Iconos/LinkedIn-footerLogo.svg'
import Facebook from '../../Assets/Iconos/Facebook-footerLogo.svg'


const Formulario = () => {
    return (
        <section>
            <div>
                <h2>¡Hola! ¿Podemos ayudarte?</h2>
                <form action="">
                    <input type="text" placeholder="Nombre Completo*"  name="nombre"/> 
                    <input type="number" placeholder="Teléfono" name="telefono"/>
                    <input type="text" placeholder="Correo*" name="email"/>
                    <input type="text" placeholder="Mensaje*" name="mensaje"/>
                    <p>* Indica que los campos son obligatorios</p> 
                    <p>Al hacer click en enviar autorizas el uso de datos personales</p> 
                    <button>Enviar</button>
                </form>
                <div>
                    <h4>Siguenos en Redes Sociales</h4>
                    <ul style={{ backgroundColor: 'black'}}>
                        <li><a href='#'><img src={WhatsApp} alt="WhatsApp Icon"/></a></li>
                        <li><a href='#'><img src={Email} alt="Email Icon"/></a></li>
                        <li><a href='#'><img src={Instagram} alt="Instagram Icon" /></a></li>
                        <li><a href='#'><img src={LinkedIn} alt="LinkedIn Icon"/></a></li>
                        <li><a href='#'><img src={Facebook} alt="Facebook Icon"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Formulario