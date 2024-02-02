import React, { useRef, useState } from 'react';
import SocialMedia from '../../Function_components/SocialMedia/SocialMedia';
import SendArrow from '../../Assets/Iconos/send-footerNewsletter.svg';
import './Formulario.css';
import SendedForm from '../../Assets/Iconos/check2.svg'

const Formulario = () => {
  const formRef = useRef(); 

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "nombre":
        setNombre(value);
        break;
      case "telefono":
        setTelefono(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(formRef.current);
      const response = await fetch('https://formsubmit.co/allxskills@gmail.com', {
        method: 'POST',
        body: formData,
      });
      setNombre("");
      setTelefono("");
      setEmail("");
      setMessage("");
      setEnviado(true);
      console.log('Formulario enviado exitosamente:', response);
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
                <input type="text" placeholder="Nombre Completo*" name="nombre" id="nombre" onChange={handleChange} value={nombre}  />
              </label>
              <label htmlFor="phone">
                <input type="tel" placeholder="Teléfono" name="telefono" id="telefono" onChange={handleChange} value={telefono}/>
              </label>
            </div>
            <label htmlFor="email">
              <input type="text" placeholder="Correo*" name="email" id="contactEmail" onChange={handleChange} value={email} className='emailFormInput'/>
            </label>
            <label htmlFor="message" className="messageFormLabel">
              <input type="text" placeholder="Mensaje*" name="message" id="message" onChange={handleChange} value={message} className='messageFormInput'/>
            </label>
            <input type="hidden" name="_captcha" value="false" />
            <div className="belowFormDiv">
              <div className="belowTextDiv">
                <p>* Indica los campos obligatorios</p>
                <p>Al hacer click en enviar autorizas el uso de datos personales</p>
              </div>
              <button type="submit" id='btn-submit' className='rebootButton'>
                {enviado ? (
                  <div className='sendForm sendedForm'>
                    <p className='sendText'>Enviado</p>
                    <img src={SendedForm} alt="" />
                  </div>
                ) : (
                  <div className='sendForm '>
                    <p className='sendText'>Enviar</p>
                    <img src={SendArrow} alt="" />
                  </div>
                )}
              </button>
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


