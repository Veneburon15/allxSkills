import React, { useRef } from 'react';
import SocialMedia from '../../Function_components/SocialMedia/SocialMedia';
import SendArrow from '../../Assets/Iconos/send-footerNewsletter.svg';
import './Formulario.css';

const Formulario = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(formRef.current);
      const response = await fetch('https://formsubmit.co/allxskills@gmail.com', {
        method: 'POST',
        body: formData,
      });
      console.log('Formulario enviado exitosamente:', response); 
      alert('Formulario enviado exitosamente')
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <section className="contactFormSection">
      <div className="formContainer">
        <div className="formChildren">
          <h1 className="heroTextGradient contactH1">¡Hola! ¿Podemos ayudarte?</h1>
          <form ref={formRef} onSubmit={handleSubmit} className="contactForm" method="POST">
            <div className="topFormDiv">
              <label htmlFor="name">
                <input type="text" placeholder="Nombre Completo*" name="name" id="nombre" className="body1" />
              </label>
              <label htmlFor="phone">
                <input type="tel" placeholder="Teléfono" name="phone" id="telefono" className="body1" />
              </label>
            </div>
            <label htmlFor="email">
              <input type="text" placeholder="Correo*" name="email" id="contactEmail" className="body1 emailFormInput" />
            </label>
            <label htmlFor="message" className="messageFormLabel">
              <input type="text" placeholder="Mensaje*" name="message" id="message" className="body1 messageFormInput" />
            </label>
            <input type="hidden" name="_captcha" value="false" />
            <div className="belowFormDiv">
              <div className="belowTextDiv">
                <p>* Indica los campos obligatorios</p>
                <p>Al hacer click en enviar autorizas el uso de datos personales</p>
              </div>
              <div className="sendForm">
                <button type="submit">Enviar</button>
                <img src={SendArrow} alt="" />
              </div>
            </div>
          </form>
        </div>
        <div className="socialMediaDiv">
          <h3>Síguenos en Redes Sociales</h3>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default Formulario;
