import { Link, NavLink } from 'react-router-dom'
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png'
import DropdownIcon from '../Assets/Iconos/arrow-navbarDropdown.svg'
import './Navbar.css'
import Cursos from '../async'

const Navbar = () => {
    return(
        <nav>
            <Link to='/' className='logoDiv'>
                <img src={Logo} alt="Logo Allxskills"/>
            </Link>
            <ul className='navbarMenu'>
                <li>
                    <NavLink to='/ofertaAcademica' className='navFont'> Oferta Académica 
                        <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon'/>
                    </NavLink> 
                    {/* <ul>
                        <li>
                            <NavLink to=''>Todos los Cursos</NavLink>
                        </li>
                        <li>
                            <h4>Workshops</h4>
                            <NavLink to=''>Inteligencia emocional</NavLink>
                            <NavLink to=''>Habilidades intrapersonales</NavLink>
                        </li>
                        <li>
                            <h4>SkillPack</h4>
                            <NavLink to=''>Proximamente...</NavLink>
                        </li>
                    </ul> */}
                </li> 
                <li>
                    <NavLink to={`/curso/${Cursos[0].id}`} className='navFont'>Inteligencia emocional</NavLink>
                </li>
                <li>
                    <NavLink to='/' className='navFont'> Sobre Nosotros </NavLink>
                </li>
                <li>
                    <NavLink to='/SoftSkills' className='navFont'> ¿Por qué Soft Skills? </NavLink>
                </li>
                <li>
                    <NavLink to='/Contactanos' className="contactButton"> Contáctanos </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;