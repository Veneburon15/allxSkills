import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
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

  const phoneNumber = 'tunumerodetelefono'; // Reemplaza con tu número de WhatsApp

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={`whatsapp-button ${showButton ? 'show' : 'hide'}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
