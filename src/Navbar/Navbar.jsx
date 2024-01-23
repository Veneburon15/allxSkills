import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png';
import './Navbar.css';
import BurguerNavBar from '../Function_components/BurguerNavBar/BurguerNavBar';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    console.log(clicked)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='navBar'>
            <Link to='/' className='logoDiv'>
                <img src={Logo} alt="Logo Allxskills" />
            </Link>
            <ul className={`links ${clicked ? 'active' : ''}`}>
                <li onClick={handleClick}>
                    <NavLink to='/OfertaAcademica' className='navFont'> Oferta Académica </NavLink>
                </li>
                <li onClick={handleClick}>
                    <NavLink to='/SobreNosotros' className='navFont'> Sobre Nosotros </NavLink>
                </li>
                <li onClick={handleClick}>
                    <NavLink to='/SoftSkills' className='navFont'> ¿Por qué Soft Skills? </NavLink>
                </li>
                <li onClick={handleClick}>
                    <NavLink to='/Contactanos' className="contactButton"> Contáctanos </NavLink>
                </li>
            </ul>
            <div className='burger'>
                <BurguerNavBar clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`initial ${clicked ? 'active' : '' }`}></div>
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
