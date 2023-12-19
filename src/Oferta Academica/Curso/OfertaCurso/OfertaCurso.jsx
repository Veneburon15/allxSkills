import './OfertaCurso.css'

const OfertaCurso = ({precioArg,precioUsd}) => { 
    return(
    <section className='offerSection'>
        <div className='offerBackground'>
            <div className='pricerDiv firstPricerDiv'>
                <h4 className='zones'>ARGENTINA</h4>
                <h3 className='price'>{precioArg}</h3> 
                <p className='body1'>Pesos Argentinos</p>
            </div>
            <div className='pricerDiv'>
                <h4 className='zones'>OTROS PAÍSES</h4>
                <h3 className='price'>{precioUsd}</h3>  
                <p className='body1'>Dólares Estadounidenses</p>
            </div>
            <div className='paymentOptions'>
                <h4 className='body1'>Medios de Pago Habilitados</h4>
                <div className='paymentLogoContainer'>
                    <img src="" alt="Visa" className='paymentLogo'/>
                    <img src="" alt="MasterCard" className='paymentLogo'/>
                    <img src="" alt="Apple Pay" className='paymentLogo'/>
                </div>
                <div className='paymentLogoContainer'>
                    <img src="" alt="PayPal" className='paymentLogo'/>
                    <img src="" alt="Amazon Pay" className='paymentLogo'/>
                    <img src="" alt="American Express" className='paymentLogo'/>
                </div>
            </div> 
        </div>
        <button className='paymentTriggerButton violetButton'>Enlace al Pago</button>
    </section>
    )
} 

export default OfertaCurso