import './Preguntas.css'
import DropdownIcon from '../../../Assets/Iconos/arrow-navbarDropdown.svg'
import { useState } from 'react'

const Preguntas = () => { 
    const [acordeonCompra, setAcordeonCompra] = useState(false)
    const [acordeonClase, setAcordeonClase] = useState(false)
    const [acordeonPrerequisitos, setAcordeonPrerequisitos] = useState(false) 

    const handleOpen = (e) => {
        if(e.target.id === 'compra' || e.target.id === 'compraDrop' || e.target.id === 'compraH3'){
            setAcordeonCompra(!acordeonCompra)
            setAcordeonClase(false)
            setAcordeonPrerequisitos(false)
        
        }
        else{
            if(e.target.id === 'clase' || e.target.id === 'claseDrop' || e.target.id === 'claseH3'){
                setAcordeonCompra(false)
                setAcordeonClase(!acordeonClase)
                setAcordeonPrerequisitos(false)
    
            }else{
                if(e.target.id === 'prerequisitos' || e.target.id === 'prerequisitosDrop' || e.target.id === 'prerequisitosH3'){
                    setAcordeonCompra(false)
                    setAcordeonClase(false)
                    setAcordeonPrerequisitos(!acordeonPrerequisitos)
        
                } 
            }
        } 
    }
    return (
        <section className='preguntasSection'>
            <div className='leftDivPreguntas'>
                <h2 className='FAQH2'>FAQ</h2>
                <h2 className='courseDetailH2 frequent'>Preguntas Frecuentes.</h2>
            </div>
            <div className='questionMainDiv'>
                <div className='courseInfo'>
                    <div className='dropdownDetailDeployer' id='compra' onClick={handleOpen}> 
                        <h3 className='body3' id='compraH3' onClick={handleOpen}>¿Mi compra es segura?</h3>
                        <img src={DropdownIcon} alt="ícono de flechita" id='compraDrop' onClick={handleOpen} className={acordeonCompra ? "dropdownIcon drop rotate" : "dropdownIcon drop"}/>
                    </div>
                    <p className={acordeonCompra ? "body1 shown" : "body1 hide"}>Sí, garantizamos un método de pago seguro y confiable. Utilizamos tecnologías de cifrado para proteger tu información financiera.</p>
                </div>
                <div className='courseInfo'>
                    <div className='dropdownDetailDeployer' id='clase' onClick={handleOpen}>
                        <h3 className='body3' id='claseH3'>¿Qué sucede si me pierdo una o más clases?</h3> 
                        <img src={DropdownIcon} alt="ícono de flechita" className={acordeonClase ? "dropdownIcon drop rotate" : "dropdownIcon drop"} id='claseDrop' onClick={handleOpen}/>
                    </div>
                    <p className={acordeonClase ? "body1 shown" : "body1 hide"}>Puedes revisar la clase grabada. Te enviaremos el acceso a ella. Si por algún caso de fuerza mayor necesitas ausentarte de la clase, deberás comunicarte con nosotros para avisarnos</p>
                </div>
                <div className='courseInfo'>
                    <div className='dropdownDetailDeployer' id='prerequisitos' onClick={handleOpen}>
                        <h3 className='body3' id='prerequisitosH3' onClick={handleOpen}>¿Hay prerrequisitos para cursar?</h3> 
                        <img src={DropdownIcon} alt="ícono de flechita" className={acordeonPrerequisitos ? "dropdownIcon drop rotate" : "dropdownIcon drop"} id='prerequisitosDrop' onClick={handleOpen}/>
                    </div>
                    <p className={acordeonPrerequisitos ? "body1 shown" : "body1 hide"}>No, todos nuestros cursos están diseñados para adaptarse a diversos niveles de experencia. No hay prerrequisitos para comenzar tu aprendizaje.</p> 
                </div>
            </div>
        </section>
    )
}

export default Preguntas