import './HeroOferta.css'

const HeroOferta = () => {
    return(
        <section className='heroSection'>
            <div className='leftDiv'>
                <img src="" alt="Grupo de jóvenes" />
                <div>
                    <h3>Impulsa tu carrerra <br/> profesional</h3>
                </div>
            </div>
            <div className='rightDiv'>
                <div className='rightTopDiv'>
                    <div className='learnSoft'>
                        <h3>/¿Por qué aprender Soft Skills?</h3>
                        <p>Aprende aptitudes para potenciar tu carrera profesional junto a profesores expertos en la industria</p>
                        <button>Botón</button>
                    </div>
                    <figure>
                        <img src="" alt="Hombre mirando el celular"/>
                    </figure>
                </div>
                <div className='rightBelowDiv'>
                    <div className='benefits'>
                        <h3>Beneficios</h3>
                        <p>teoría</p>
                        <p>clases en vivo</p>
                        <p>dinámico</p>
                        <p>feedback</p>
                        <p>práctica</p>
                        <p>desafíos de aprendizaje</p>
                    </div>
                    <div className='learnDoing'>
                        <h2>Aprende haciendo</h2>
                        <p>Nuestros Workshops te ofrecen una forma diferente y dinámica para aprender ¡Descubre una educación innovadora!</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroOferta