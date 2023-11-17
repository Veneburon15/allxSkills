import './Preguntas.css'

const Preguntas = () => {
    return (
        <section className='preguntasSection'>
            <h2>Preguntas Frecuentes</h2>
            <div className='questionMainDiv'>
                <div className='questionDiv bottomBorder'>
                    <p>¿Mi compra es segura?</p>
                    {/* FLECHITA (VER QUE ICONOS VAMOS A USAR) */}
                </div>
                <div className='questionDiv bottomBorder'>
                    <p>¿Tendré un certificado al finalizar el curso?</p> 
                    {/* FLECHITA (VER QUE ICONOS VAMOS A USAR) */}
                </div>
                <div className='questionDiv'>
                    <p>¿Hay prerrequisitos para cursar?</p> 
                    {/* FLECHITA (VER QUE ICONOS VAMOS A USAR) */}
                </div>
            </div>
        </section>
    )
}

export default Preguntas