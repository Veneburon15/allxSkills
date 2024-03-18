import React, { useRef, useEffect } from 'react';
import './Newsletter.css';

const Newsletter = () => { 
    const emailsNewsLetter = useRef([]);

    useEffect(() => {
        const storedEmails = localStorage.getItem('emails');
        if (storedEmails) {
            emailsNewsLetter.current = JSON.parse(storedEmails);
        }
    }, []);

    const handleNewsLetter = (e) => {
        e.preventDefault();
        const email = e.target.elements.userEmail.value; 
        emailsNewsLetter.current.push(email);
        localStorage.setItem('emails', JSON.stringify(emailsNewsLetter.current));
    }

    const logEmails = () => {
        console.log(emailsNewsLetter.current);
    }

    return (
        <section className='newsletterSection'>
            <h3 className='newsletterP hiddenInPC'>¡Suscríbete a nuestro boletín!</h3>
            <h3 className='hiddenInPhone'>¡Eleva tus habilidades con nosotros!</h3>
            <p className='hiddenInPhone'>Recibe contenido exclusivo, actualizaciones y oportunidades de desarrollo personal y profesional en tu bandeja de entrada</p>
            <form className='suscribeForm' onSubmit={handleNewsLetter}>
                <label htmlFor="email">
                    <input type="email" id='email' name='userEmail' placeholder='Tu correo'/>
                </label>
                <input type="submit" name="suscribe" value="Suscríbete" className='suscribeButton'/>
            </form>
        </section>
    )
}

export default Newsletter;
