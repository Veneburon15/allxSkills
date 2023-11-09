import './Newsletter.css'

const Newsletter = () => {
    return (
        <section className='newsletterSection'>
            <h3>¡Eleva tus habilidades con nosotros!</h3>
            <p>Recibe contenido exclusivo, actualizaciones y oportunidades de desarrollo personal y profesional en tu bandeja de entrada</p>
            <form className='suscribeForm'>
                <label htmlFor="email">
                    <input type="email" id='email' name='userEmail' placeholder='Tu correo'/>
                </label>
                <input type="submit" name="suscribe" value="Suscríbete" className='suscribeButton'/>
            </form>
        </section>
    )
}

export default Newsletter