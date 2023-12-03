import './HeroOferta.css'

const HeroOferta = () => {
    return(
        <section className='heroSection'>
            <div className='heroMainDiv'>
                <h2 className="mainH2">Descubre tu <span className='heroTextGradient'>mejor <br /> versión</span></h2>
                <p className='mainHeroP'>Desarrolla las actitudes y hábitos que te impulsarán a <br /> destacar como profesional en todos los campos y roles.</p>
                <button className="headButton">Explora nuestros cursos</button>
            </div>
        </section>
    )
}

export default HeroOferta