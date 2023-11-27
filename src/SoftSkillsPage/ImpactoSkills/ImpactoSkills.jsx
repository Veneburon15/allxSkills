import './ImpactoSkills.css'
import ChatIcon from '../../Assets/Iconos/ChatsCircle-r.svg'
import Megaphone from '../../Assets/Iconos/Megaphone-r.svg'
import LikeIcon from '../../Assets/Iconos/ThumbsUp-r.svg'
import HandShake from '../../Assets/Iconos/Handshake-r.svg'
import SmileyFace from '../../Assets/Iconos/Smiley-r.svg'

const ImpactoSkills = () => {
    return (
        <section className='impactoMainSection'>
            <h2>El impacto de las Soft Skills</h2>
            <div className='impactoMainDiv'>
                <div>
                    <img src={ChatIcon} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Comunicacion Efectiva</h4>
                    <p className='body1'>Mejora tu capacidad para <br />expresarte de manera clara <br /> y asertiva.</p>
                </div>
                <div>
                    <img src={Megaphone} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Liderazgo</h4>
                    <p className='body1'>Aprende a liderar y <br />motivar a otros de <br /> manera efectiva.</p>
                </div>
                <div>
                    <img src={LikeIcon} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Resolución de Problemas</h4>
                    <p className='body1'>Desarrolla la habilidad de abordar desafíos de <br /> manera eficiente.</p>
                </div> 
                <div>
                    <img src={HandShake} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Colaboración</h4>
                    <p className='body1'>Aprende a trabajar <br />en equipo de <br /> manera eficaz.</p>
                </div>   
                <div className='manejoEmociones'>
                    <img src={SmileyFace} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Manejo de Emociones</h4>
                    <p className='body1'>Aprende a gestionar el <br /> estrés y las emociones en el <br />entorno laboral y personal.</p>
                </div>
            </div> 
        </section>
    )
}

export default ImpactoSkills