import checkmarkIcon from '../../Assets/Iconos/check-Pink.svg'
import './Staff.css'

const Staff = () => {
    return (
        <section className='staffSection'>
            <div>
                <img src={checkmarkIcon} alt="ícono Check" className='checkIcon'/>
                <p className='staffText'>Enfoque <br/> interactivo</p> 
            </div>
            <div>
                <img src={checkmarkIcon} alt="ícono Check" className='checkIcon'/>
                <p>Aprende <br/> haciendo</p> 
            </div>
            <div>
                <img src={checkmarkIcon} alt="ícono Check" className='checkIcon'/>
                <p className='staffText'>Material <br/> exclusivo</p> 
            </div>
            <div>
                <img src={checkmarkIcon} alt="ícono Check" className='checkIcon'/>
                <p className='staffText'>Simulaciones <br/> y Roleplay</p> 
            </div>
            <div>
                <img src={checkmarkIcon} alt="ícono Check" className='checkIcon'/>
                <p className='staffText'>Juegos <br/> y Desafíos</p> 
            </div>
        </section> 
    )
} 

export default Staff