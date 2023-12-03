import './Workshop.css'

const Workshop = ({curso}) => { 
    console.log(curso)
    return (
        <section className='workShopContainer'>
            <div className='cardDiv'> 
                <h4 className='tag'>{curso.tipo}</h4>
                <div className='topCardDiv'>
                    {/* <h3 className='cardHeader'>Inteligencia emocional:</h3> */}
                    <p className="cardTitle">{curso.nombre}</p>
                </div> 
                <div className="cardSecondDiv">
                    <div>
                        <p className='body2'>Duración:</p><p>{curso.duracion}</p>
                    </div>
                    <div>
                        <p className='body2'>Modalidad:</p><p>{curso.modalidad}</p>
                    </div>
                    <div>
                        <p className='body2'>Formato:</p><p>{curso.formato}</p>
                    </div>
                </div> 
                <button className='cardButton'>Conocer más</button>
                <div className="coloredDiv"></div>
            </div>
            {/* <div className='cardDiv'> 
                <h4 className='tag'>Workshop</h4>
                <div className='topCardDiv'>
                    <h3 className='cardHeader'>Habilidades Interpersonales:</h3>
                    <p className="cardTitle">Encuentra el empleo que deseas</p>
                </div> 
                <div className="cardSecondDiv">
                    <div>
                        <p className='body2'>Duración:</p><p>2 horas</p>
                    </div>
                    <div>
                        <p className='body2'>Modalidad:</p><p> Online (Teórico-Práctico)</p>
                    </div>
                    <div>
                        <p className='body2'>Formato:</p><p> Online (Teórico-Práctico)</p>
                    </div>
                </div> 
                <button className='cardButton'>Conocer más</button>
                <div className="coloredDiv"></div>
            </div>
            <div className='cardDiv'> 
                <h4 className='tag'>Workshop</h4>
                <div className='topCardDiv'>
                    <h3 className='cardHeader'>Habilidades Interpersonales:</h3>
                    <p className="cardTitle">Encuentra el empleo que deseas</p>
                </div> 
                <div className="cardSecondDiv">
                    <div>
                        <p className='body2'>Duración:   </p> <p>2 horas</p>
                    </div>
                    <div>
                        <p className='body2'>Modalidad:</p><p> Online (Teórico-Práctico)</p>
                    </div>
                    <div>
                        <p className='body2'>Formato:</p><p> Online (Teórico-Práctico)</p>
                    </div>
                </div> 
                <button className='cardButton'>Conocer más</button>
                <div className="coloredDiv"></div>
            </div> */}
        </section> 
    )
} 

export default Workshop