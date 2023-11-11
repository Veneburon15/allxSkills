import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <a src="#" className='logoDiv'>
                <img src={Logo} alt="Logo Allxskills"/>
            </a> 
            <div className='navDiv'>
                <ul className='navbarMenu'>
                    <li>
                        <a href='#' className='menuFont'>Oferta académica</a>
                        {/* <img src="#" alt="Dropdown Icon" className='dropdownIcon'/> */}
                        {/* <div>
                            <div>
                                <a href='#'>Todos los Cursos</a>
                            </div>
                            <div>
                                <h4>Workshops</h4>
                                <a href='#'>Inteligencia emocional</a>
                                <a href='#'>Habilidades intrapersonales</a>
                            </div>
                            <div>
                                <h4>SkillPack</h4>
                                <a href='#'>Proximamente...</a>
                            </div>
                        </div> */}
                    </li>
                    <li><a href='#' className='menuFont'>Sobre nosotros</a></li> 
                    <li><a href='#' className='menuFont'>¿Por qué Soft Skills?</a></li> 
                    <button className='contactButton'>Contáctanos</button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;