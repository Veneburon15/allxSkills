import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png';
import DropdownIcon from '../Assets/Iconos/arrow-navbarDropdown.svg';
import './Navbar.css';
import Cursos from '../async';

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className='logoDiv'>
                <img src={Logo} alt="Logo Allxskills" />
            </Link>
            <ul className='navbarMenu'>
                <li>
                    <NavLink to='/OfertaAcademica' className='navFont'> Oferta Académica </NavLink>
                </li>
                <li>
                    <NavLink to='/SobreNosotros' className='navFont'> Sobre Nosotros </NavLink>
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

// const Navbar = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     return (
//         <nav>
//             <Link to='/' className='logoDiv'>
//                 <img src={Logo} alt="Logo Allxskills" />
//             </Link>
//             <ul className='navbarMenu'>
//                 <li className='nav-item dropdown'>
//                     <div onClick={toggleDropdown} className='navFont dropdown-toggle' id="dropdown-basic">
//                         Oferta Académica <img src={DropdownIcon} alt="Dropdown Icon" className='dropdownIcon' />
//                     </div>

//                     <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
//                         <div className='column'>
//                             <div className='section'>
//                                 <NavLink to='/ofertaAcademica' className='navFont dropdown-item todos-cursos'>Todos los Cursos</NavLink>
//                             </div>
//                         </div>
//                         <div className='column'>
//                             <div className='section'>
//                                 <h4 className='dropdown-tittle'>Workshops</h4>
//                                 <NavLink to={`/curso/${Cursos[0].id}`} className='navFont dropdown-item'>Inteligencia emocional</NavLink>
//                                 <NavLink to='' className='navFont dropdown-item'>Habilidades intrapersonales</NavLink>
//                             </div>
//                         </div>
//                         <div className='column'>
//                             <div className='section'>
//                                 <h4 className='dropdown-tittle'>SkillPack</h4>
//                                 <NavLink to='' className='navFont dropdown-item'>Proximamente...</NavLink>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//                 <li>
//                     <NavLink to='/SobreNosotros' className='navFont'> Sobre Nosotros </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/SoftSkills' className='navFont'> ¿Por qué Soft Skills? </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/Contactanos' className="contactButton"> Contáctanos </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }
