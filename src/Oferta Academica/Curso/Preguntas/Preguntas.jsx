import './Preguntas.css'
import DropdownIcon from '../../../Assets/Iconos/arrow-navbarDropdown.svg'

const Preguntas = () => {
    return (
        <section className='preguntasSection'>
            <div className='leftDivPreguntas'>
                <h2 className='FAQH2'>FAQ</h2>
                <h2 className='courseDetailH2 frequent'>Preguntas Frecuentes.</h2>
            </div>
            <div className='questionMainDiv'>
                <div className='courseInfo'>
                    <div className='dropdownDetailDeployer'>
                        <h3 className='body3'>¿Mi compra es segura?</h3>
                        <img src={DropdownIcon} alt="ícono de flechita" className='dropdownIcon drop'/>
                    </div>
                    {/* <p className='body1'>Sí, garantizamos un método de pago seguro y confiable. Utilizamos tecnologías de cifrado para proteger tu información financiera.</p> */}
                </div>
                <div className='courseInfo'>
                    <div className='dropdownDetailDeployer'>
                        <h3 className='body3'>¿Qué sucede si me pierdo una o más clases?</h3> 
                        <img src={DropdownIcon} alt="ícono de flechita" className='dropdownIcon drop'/>
                    </div>
                    {/* <p className='body1'>Puedes revisar la clase grabada. Te enviaremos el acceso a ella. Si por algún caso de fuerza mayor necesitas ausentarte de la clase, deberás comunicarte con nosotros para avisarnos</p> */}
                </div>
                <div className='courseInfo'>
                    <div className='dropdownDetailDeployer'>
                        <h3 className='body3'>¿Hay prerrequisitos para cursar?</h3> 
                        <img src={DropdownIcon} alt="ícono de flechita" className='dropdownIcon drop'/>
                    </div>
                    {/* <p className='body1'>No, todos nuestros cursos están diseñados para adaptarse a diversos niveles de experencia. No hay prerrequisitos para comenzar tu aprendizaje.</p>  */}
                </div>
            </div>
        </section>
    )
}

export default Preguntas