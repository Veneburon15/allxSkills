
const OfertaCurso = ({precioArg,precioUsd}) => { 
    return(
    <section>
        <div>
            <div>
                <h4>ARGENTINA</h4>
                <h3>{precioArg}</h3> 
                <p>Pesos Argentinos</p>
            </div>
            <div>
                <h4>OTROS PAÍSES</h4>
                <h3>{precioUsd}</h3>  
                <p>Dolares Estadounidenses</p>
            </div>
            <div>
                <h4>Medios de Pago Habilitados</h4>
                <div>
                    <img src="" alt="Visa"/>
                    <img src="" alt="MasterCard"/>
                    <img src="" alt="Apple Pay"/>
                    <img src="" alt="PayPal"/>
                    <img src="" alt="Amazon Pay"/>
                    <img src="" alt="American Express"/>
                </div>
            </div> 
            <button>Enlace al Pago</button>
        </div>
    </section>
    )
} 

export default OfertaCurso