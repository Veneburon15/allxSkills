import DropdownIcon from '../../../Assets/Iconos/arrow-navbarDropdown.svg'
import './HeroCurso.css'
import pHCertificate from '../../../Assets/Iconos/ph_certificate.svg'
import { useState } from 'react'

const HeroCurso = ({tipo,nombre,slogan,fechaLarga,fecha,objetivos,contenido,horarioDias,horarioHoras,duracion}) => {
    const [acordeonObjetivos, setAcordeonObjetivos] = useState(false);
    const [acordeonContenido, setAcordeonContenido] = useState(false);
    const [acordeonHorario, setAcordeonHorario] = useState(false);
    const [acordeonDuracion, setAcordeonDuracion] = useState(false); 

const handleOpen = (e) => { 
        if(e.target.id === 'objetivos'){
            setAcordeonObjetivos(!acordeonObjetivos)
            setAcordeonContenido(false)
            setAcordeonHorario(false)
            setAcordeonDuracion(false) 
        }
        else{
            if(e.target.id === 'contenido'){
                setAcordeonObjetivos(false)
                setAcordeonContenido(!acordeonContenido)
                setAcordeonHorario(false)
                setAcordeonDuracion(false)
            }else{
                if(e.target.id === 'horarios'){
                    setAcordeonObjetivos(false)
                    setAcordeonContenido(false)
                    setAcordeonHorario(!acordeonHorario)
                    setAcordeonDuracion(false)
                }
                else{
                    if(e.target.className === 'dropdownDetailDeployer' || 'body3' || 'dropdownIcon'){
                        setAcordeonObjetivos(false)
                        setAcordeonContenido(false)
                        setAcordeonHorario(false)
                        setAcordeonDuracion(!acordeonDuracion)
                    }   
                }
            }
        }
    }
    return(
        <section className='courseDetailHeroSection'>
            <div className='divSectionContainer'>
                <div className='topDivDetailHero'>
                    <h4 className={`tag ${tipo}`}  id="tag">{tipo}</h4>
                    <h2 className='courseDetailH2'>{nombre}:</h2>
                    <h3>{slogan}</h3>
                    <div className='topInnerDiv'>
                        <p className='fecha'>{fecha}</p>
                        <p className='dateAbreviation'>FEB</p>
                        <button className='inscriptionButton'>Inscríbete Ahora</button>
                    </div>
                </div>
                <div className='centerDivDetailHero'>
                    <div className='courseInfo'  >
                        <div className='dropTop dropdownDetailDeployer'>
                            <h3 className='body3'>Objetivos</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop' id='objetivos' onClick={handleOpen}/>
                        </div>
                        <p className={acordeonObjetivos ? "body1" : "body1 hide"}>{objetivos}</p>
                    </div>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' onClick={handleOpen}>
                            <h3 className='body3' onClick={handleOpen}>Contenido</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop' id='contenido'onClick={handleOpen}/>
                        </div>
                        <p className={acordeonContenido ? "body1" : "body1 hide "}>{contenido}</p>
                    </div>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' onClick={handleOpen}>
                            <h3 className='body3' onClick={handleOpen}>Horario</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop' id='horarios' onClick={handleOpen}/>
                        </div>
                        <p className={acordeonHorario ? "body1" : "body1 hide "}>{horarioDias}</p>
                    </div> 
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' onClick={handleOpen}>
                            <h3 className='body3' onClick={handleOpen}>Duración</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop' id='duracion' onClick={handleOpen}/>
                        </div>
                        <p className={acordeonDuracion ? "body1" : "body1 hide "}>{duracion}</p>
                    </div>
                </div>

            </div> 
            <div className='bellowDivDetailHero'>
                <p className='body2'>Los cupos son limitados. Máximo 10 participantes. <br  className='hiddenInPhone'/> Las clases se graban y quedan a disposición del asistente.</p>
                <div className='certificationBadgeDiv'>
                    <img src={pHCertificate} alt="Logo de Certificado" />
                    <p className='body2 badgeText'>Se entrega Certificado de Participación</p>
                </div>
            </div>
        </section>
    )
}

export default HeroCurso