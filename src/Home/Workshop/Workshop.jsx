import './Workshop.css'
import { Link } from 'react-router-dom'

const Workshop = ({curso}) => {     
    return (
        <section className='workShopContainer'>
            <div className='cardDiv'> 
                <h4 className={`tag ${curso.tipo}`}  id="tag">{curso.tipo}</h4>
                <div className='topCardDiv'>
                    <p className="cardTitle">{curso.nombre}</p>
                    <p className='slogan'>{curso.slogan}</p>
                </div> 
                <div className="cardSecondDiv">
                    <div>
                        <p className='body2'>Duración:</p><p>{curso.duracion}</p>
                    </div>
                    <div>
                        <p className='body2'>Modalidad:</p><p>{curso.modalidad}</p>
                    </div>
                    <div>
                        <p className='body2'>Formato:</p><p>{curso.Formato}</p>
                    </div>
                    <div>
                        <p className='body2'>Fecha:</p><p className='body2'>{curso.fecha}</p>
                    </div>
                </div> 
                <div className='cardLastDiv'>
                    <Link to={`/curso/${curso.id}`}><button className='cardButton'>Conocer más</button></Link>
                    <div className="coloredDiv"></div>
                </div>
            </div>
        </section> 
    ) 
    
} 

export default Workshop