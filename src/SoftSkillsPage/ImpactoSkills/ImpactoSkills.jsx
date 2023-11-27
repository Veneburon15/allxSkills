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
                    <p className='body1'>Mejora tu capacidad para expresarte de manera clara y asertiva.</p>
                </div>
                <div>
                    <img src={Megaphone} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Liderazgo</h4>
                    <p className='body1'>Aprende a liderar y motivar a otros de manera efectiva.</p>
                </div>
                <div>
                    <img src={LikeIcon} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Resolución de Problemas</h4>
                    <p className='body1'>Desarrolla la habilidad de abordar desafíos de manera eficiente.</p>
                </div> 
                <div>
                    <img src={HandShake} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Colaboracióm</h4>
                    <p className='body1'>Trabaja en equipo de manera eficaz.</p>
                </div>   
                <div>
                    <img src={SmileyFace} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3'>Manejo de Emociones</h4>
                    <p className='body1'>Aprende a gestionar el estrés y las emociones en el entorno laboral y personal.</p>
                </div>
            </div> 
        </section>
    )
}

export default ImpactoSkills