import './Workshop.css'
const Workshop = () => {
    return (
        <section className='workShopContainer'>
            <div className='mainCardDiv'> {/* CONTIENE LAS CARDS*/}
                <div className='cardDiv'> {/* ESTAS CARDS LAS QUISE HACER EN OTRO COMPONENTE PERO NECESITAMOS UNA DB PARA ESO PARA SACAR LA INFO*/}
                    <h4>Workshop</h4>
                    <div className='topCardDiv'>
                        <h3>Inteligencia Emocional:</h3>
                        <p className="cardTitle">Gestionando cambios con éxito</p>
                    </div> 
                    <div className="cardSecondDiv">
                        <p>Duracion: 6 horas</p>
                        <p>Modalidad: Online (Teórico-Práctico)</p>
                        <p>Formato: Online (Teórico-Práctico)</p>
                    </div>
                    <button className='cardButton'>conocer más</button>
                    <div className="coloredDiv"></div>
                </div> 
                <div className='cardDiv'> {/* ESTAS CARDS LAS QUISE HACER EN OTRO COMPONENTE PERO NECESITAMOS UNA DB PARA ESO PARA SACAR LA INFO*/}
                    <h4>Workshop</h4>
                    <div className='topCardDiv'>
                        <h3>Habilidades Interpersonales:</h3>
                        <p className="cardTitle">Encuentra el empleo que deseas</p>
                    </div> 
                    <div className="cardSecondDiv">
                        <p>Duración: 2 horas</p>
                        <p>Modalidad: Online (Teórico-Práctico)</p>
                        <p>Formato: Online (Teórico-Práctico)</p>
                    </div> 
                    <button className='cardButton'>conocer más</button>
                    <div className="coloredDiv"></div>
                </div>
                <div className='cardDiv'> {/* ESTAS CARDS LAS QUISE HACER EN OTRO COMPONENTE PERO NECESITAMOS UNA DB PARA ESO PARA SACAR LA INFO*/}
                    <h4>Workshop</h4>
                    <div className='topCardDiv'>
                        <h3>InfoProducto Nuevo</h3>
                        <p className="cardTitle">Pensando que poner aca</p>
                    </div> 
                    <div className="cardSecondDiv">
                        <p>Duración: 2 horas</p>
                        <p>Modalidad: Online (Teórico-Práctico)</p>
                        <p>Formato: Online (Teórico-Práctico)</p>
                    </div> 
                    <button className='cardButton'>conocer más</button>
                    <div className="coloredDiv"></div>
                </div>
            </div>
        </section> 
    )
} 

export default Workshop