import React, { useState, useEffect } from 'react';
import WppIcon from '../../Assets/Iconos/WhatsApp.png'
import './WhatsappButton.css';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const phoneNumber = 'tunumerodetelefono'; 

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
