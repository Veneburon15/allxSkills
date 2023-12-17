import './Preguntas.css'

const Preguntas = () => {
    return (
        <section className='preguntasSection'>
            <h2>Preguntas Frecuentes</h2>
            <div className='questionMainDiv'>
                <div className='questionDiv bottomBorder'>
                    <p>¿Mi compra es segura?</p>
                    {/* FLECHITA (VER QUE ICONOS VAMOS A USAR) */} 
                    {/* <p>Sí, garantizamos un método de pago seguro y confiable. Utilizamos tecnologías de cifrado para proteger tu información financiera.</p> */}
                </div>
                <div className='questionDiv bottomBorder'>
                    <p>¿Qué sucede si me pierdo una o más clases?</p> 
                    {/* <p>Puedes revisar la clase grabada. Te enviaremos el acceso a ella. Si por algún caso de fuerza mayor necesitas ausentarte de la clase, deberás comunicarte con nosotros para avisarnos</p> */}
                    {/* FLECHITA (VER QUE ICONOS VAMOS A USAR) */}
                </div>
                <div className='questionDiv'>
                    <p>¿Hay prerrequisitos para cursar?</p> 
                    {/* <p>No, todos nuestros cursos están diseñados para adaptarse a diversos niveles de experencia. No hay prerrequisitos para comenzar tu aprendizaje.</p>  */}
                    {/* FLECHITA (VER QUE ICONOS VAMOS A USAR) */}
                </div>
            </div>
        </section>
    )
}

export default Preguntas