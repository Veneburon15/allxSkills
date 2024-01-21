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
                    <h4 className='body3 hiddenInPhone'>Comunicacion Efectiva</h4>
                    <p className='body1 hiddenInPhone'>Mejora tu capacidad para <br />expresarte de manera clara <br /> y asertiva.</p>
                    <p className='body1 hiddenInPC'>Exprésate de manera acertiva</p>
                </div>
                <div>
                    <img src={Megaphone} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3 hiddenInPhone'>Liderazgo</h4>
                    <p className='body1 hiddenInPhone'>Aprende a liderar y <br />motivar a otros de <br /> manera efectiva.</p>
                    <p className='body1 hiddenInPC'>Aprende a liderar y motivar</p>
                </div>
                <div>
                    <img src={LikeIcon} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3 hiddenInPhone'>Resolución de Problemas</h4>
                    <p className='body1 hiddenInPhone'>Desarrolla la habilidad de <br /> abordar desafíos de <br /> manera eficiente.</p>
                    <p className='body1 hiddenInPC'>Aborder desafíos de manera eficiente</p>
                </div> 
                <div>
                    <img src={HandShake} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3 hiddenInPhone'>Colaboración</h4>
                    <p className='body1 hiddenInPhone'>Aprende a trabajar <br />en equipo de <br /> manera eficaz.</p>
                    <p className='body1 hiddenInPC'>Trabaja en equipo de manera eficaz</p>
                </div>   
                <div className='manejoEmociones'>
                    <img src={SmileyFace} alt="Icono" className='softSkillsIcon'/>
                    <h4 className='body3 hiddenInPhone'>Manejo de Emociones</h4>
                    <p className='body1 hiddenInPhone'>Aprende a gestionar el <br /> estrés y las emociones en el <br />entorno laboral y personal.</p>
                    <p className='body1 hiddenInPC'>Gestiona el estrés y las emociones</p>
                </div>
            </div> 
        </section>
    )
}

export default ImpactoSkills