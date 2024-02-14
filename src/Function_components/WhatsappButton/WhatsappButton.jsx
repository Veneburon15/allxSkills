import React, { useState, useEffect } from 'react';
import WppIcon from '../../Assets/Iconos/WhatsApp.png'
import './WhatsappButton.css';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);
  const phoneNumber = '+5491139214786'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={`whatsapp-button ${showButton ? 'show' : 'hide'}`}
      target="_blank"
      rel="noopener noreferrer"
    >
        Escríbenos
        <img src={WppIcon} alt="ícono de WhatsApp" className='iconWpp'/>
    </a>
  );
};

export default WhatsAppButton;
