import React from 'react';
import { Link } from 'react-router-dom';

import './OfertaCurso.css';

const OfertaCurso = ({ precioArg, precioUsd,id }) => {
    return (
        <section className='offerSection'>
            <div className='offerBackground'>
                <div className='pricerDiv borderDiv'>
                    <h4 className='zones'>ARGENTINA</h4>
                    <h3 className='price'>{precioArg}</h3>
                    <p className='body1'>Pesos Argentinos</p>
                </div>
                <span className='coloredBorder hiddenInPC'></span>
                <div className='pricerDiv borderDiv secondPricerDiv'>
                    <h4 className='zones'>OTROS PAÍSES</h4>
                    <h3 className='price'>US$ {precioUsd}</h3>
                    <p className='body1'>Dólares Estadounidenses</p>
                </div>
                <span className='coloredBorder hiddenInPC'></span>
                <div className='paymentOptions'>
                    <h4 className='body1'>Medios de Pago Habilitados</h4>
                    <div className='paymentLogoContainer'>
                        <img src='' alt='Visa' className='paymentLogo' />
                        <img src='' alt='MasterCard' className='paymentLogo' />
                        <img src='' alt='Apple Pay' className='paymentLogo' />
                    </div>
                    <div className='paymentLogoContainer'>
                        <img src='' alt='PayPal' className='paymentLogo' />
                        <img src='' alt='Amazon Pay' className='paymentLogo' />
                        <img src='' alt='American Express' className='paymentLogo' />
                    </div>
                </div>
            </div>
            <Link to={`/pagar/${id}`} className='paymentTriggerButton violetButton'>
                Enlace al Pago
            </Link>
        </section>
    );
};

export default OfertaCurso;
