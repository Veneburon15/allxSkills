import { Link, NavLink } from 'react-router-dom'
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png'
import DropdownIcon from '../Assets/Iconos/arrow-navbarDropdown.svg'
import './Navbar.css'

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
                    <NavLink to='/' className='navFont'> Sobre Nosotros </NavLink>
                </li>
                <li>
                    <NavLink to='/' className='navFont'> ¿Por qué Soft Skills? </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="contactButton"> Contáctanos </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;



{/* <li>
<a href='#' className='menuFont'>Oferta académica</a>
<img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon'/>
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
{/*</li>
<li><a href='#' className='menuFont'>Sobre nosotros</a></li> 
<li><a href='#' className='menuFont'>¿Por qué Soft Skills?</a></li> 
<button className='contactButton'>Contáctanos</button> */}