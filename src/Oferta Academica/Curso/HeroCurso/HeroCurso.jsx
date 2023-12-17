import DropdownIcon from '../../../Assets/Iconos/arrow-navbarDropdown.svg'

const HeroCurso = ({tipo,nombre,slogan,fechaLarga,fecha,objetivos,contenido,horarioDias,horarioHoras,duracion}) => {
    console.log(tipo)
    return(
        <section> 
        <div>
            <h4 className={`tag ${tipo}`}  id="tag">{tipo}</h4>
            <h2>{nombre}</h2>
            <h3>{slogan}</h3>
            <p>{fechaLarga}</p>
            <p>{fecha}</p> 
            <button>Inscríbite Ahoras</button>
        </div>
        <div>
            <div>
                <p>Obejetivos <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon'/></p>
                <p>{objetivos}</p>
            </div>
            <div>
                <p>Contenido <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon'/></p>
                <p>{contenido}</p>
            </div>
            <div>
                <p>Horario <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon'/></p>
                <p>{horarioDias}</p>
                <p>{horarioHoras}</p>
            </div> 
            <div>
                <p>Duracion <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon'/></p>
                <p>{duracion}</p>
            </div>
        </div>
        <div>
            <p>Los cupos son limitados. Máximo 10 participantes. Las clases se graban y quedan a disposición del asistente</p>
            <p>Se entrega Certificado de Participación</p>
        </div>
    </section>
    )
}

export default HeroCurso