import DropdownIcon from '../../../Assets/Iconos/arrow-navbarDropdown.svg'
import './HeroCurso.css'
import pHCertificate from '../../../Assets/Iconos/ph_certificate.svg'
// import {Accordion, AccordionItem} from "@nextui-org/accordion";

const HeroCurso = ({tipo,nombre,slogan,fechaLarga,fecha,objetivos,contenido,horarioDias,horarioHoras,duracion}) => {
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
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer'>
                            <h3 className='body3'>Objetivos</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop'/>
                        </div>
                        <p className='body1'>{objetivos}</p>
                    </div>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer'>
                            <h3 className='body3'>Contenido</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop'/>
                        </div>
                        <p className='body1'>{contenido}</p>
                    </div>
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer'>
                            <h3 className='body3'>Horario</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop'/>
                        </div>
                        <p className='body1'>{horarioDias} <br /> {horarioHoras} </p>
                    </div> 
                    <div className='courseInfo'>
                        <div className='dropdownDetailDeployer'>
                            <h3 className='body3'>Duración</h3> 
                            <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon drop'/>
                        </div>
                        <p className='body1'>{duracion}</p>
    </div>
                    {/* <Accordion className='centerDivDetailHero'>
                        <AccordionItem key="1" aria-label="Accordion 1" title="Objetivos" className='dropdownDetailDeployer'>
                            <div className='courseInfo'>
                                <p className='body1'>{objetivos}</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Contenido" className=' dropdownDetailDeployer'>
                            <div className='courseInfo'>
                                <p className='body1'>{contenido}</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Horario" className=' dropdownDetailDeployer'>
                            <div className='courseInfo'>
                                <p className='body1'>{horarioDias}</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4" title="Duración" className=' dropdownDetailDeployer'>
                            <div className='courseInfo'>
                                <p className='body1'>{duracion}</p>
                            </div>
                        </AccordionItem>
                    </Accordion> */}

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