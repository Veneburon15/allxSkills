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
        if(e.target.id === 'objetivos' || e.target.id === 'objetivosDrop' || e.target.id === 'objetivosH3'){
            setAcordeonObjetivos(!acordeonObjetivos)
            setAcordeonContenido(false)
            setAcordeonHorario(false)
            setAcordeonDuracion(false)        
        }
        else{
            if(e.target.id === 'contenido' || e.target.id === 'contenidoDrop' || e.target.id === 'contenidoH3'){
                setAcordeonObjetivos(false)
                setAcordeonContenido(!acordeonContenido)
                setAcordeonHorario(false)
                setAcordeonDuracion(false)
            }else{
                if(e.target.id === 'horarios' || e.target.id === 'horariosDrop' || e.target.id === 'horariosH3'){
                    setAcordeonObjetivos(false)
                    setAcordeonContenido(false)
                    setAcordeonHorario(!acordeonHorario)
                    setAcordeonDuracion(false)
                }
                else{
                    if(e.target.className === 'duracion' || e.target.id === 'duracionDrop' || e.target.id === 'duracionH3'){
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
                    <p className='fechaLarga'>{fechaLarga}</p>
                    <div className='topInnerDiv'>
                        <p className='fecha'>{fecha}</p>
                        <button className='inscriptionButton'>Inscríbete Ahora</button>
                    </div>
                </div>
                <div className='centerDivDetailHero'>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' id='objetivosDrop'  onClick={handleOpen}>
                            <h3 className='body3' id='objetivosH3'  onClick={handleOpen}>Objetivos</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className={acordeonObjetivos ? "dropdownIcon drop rotate" : "dropdownIcon drop"} id='objetivos'  onClick={handleOpen}/>
                        </div>
                        <p className={acordeonObjetivos ? "body1" : "body1 hide"}>{objetivos}</p>
                    </div>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' id='contenidoDrop'  onClick={handleOpen}>
                            <h3 className='body3' id='contenidoH3'  onClick={handleOpen}>Contenido</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className={acordeonContenido ? "dropdownIcon drop rotate" : "dropdownIcon drop"} id='contenido'  onClick={handleOpen}/>
                        </div>
                        <p className={acordeonContenido ? "body1" : "body1 hide"}>{contenido}</p>
                    </div>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' id='horariosDrop'  onClick={handleOpen}>
                            <h3 className='body3' id='horariosH3'  onClick={handleOpen}>Horario</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className={acordeonHorario ? "dropdownIcon drop rotate" : "dropdownIcon drop"} id='horarios'  onClick={handleOpen}/>
                        </div>
                        <p className={acordeonHorario ? "body1" : "body1 hide"}>{horarioDias} <br /> {horarioHoras}</p>
                    </div> 
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer' id='duracionDrop'  onClick={handleOpen}>
                            <h3 className='body3' id='duracionH3'  onClick={handleOpen}>Duración</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className={acordeonDuracion ? "dropdownIcon drop rotate" : "dropdownIcon drop"} id='duracion'  onClick={handleOpen}/>
                        </div>
                        <p className={acordeonDuracion ? "body1" : "body1 hide"}>{duracion}</p>
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