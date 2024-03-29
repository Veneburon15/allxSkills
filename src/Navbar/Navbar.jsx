import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Assets/Imagenes/xSkills_Logo_TR2.png';
import './Navbar.css';
import BurguerNavBar from '../Function_components/BurguerNavBar/BurguerNavBar';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='navBar'>
            <Link to='/' className='logoDiv'>
                <img src={Logo} alt="Logo Allxskills" />
            </Link>
            <ul className={`links ${clicked ? 'active' : ''}`}>
                <li >
                    <NavLink to='/OfertaAcademica' className='navFont' onClick={handleClick}> Oferta Académica </NavLink>
                </li>
                <li >
                    <NavLink to='/SobreNosotros' className='navFont' onClick={handleClick}> Sobre Nosotros </NavLink>
                </li>
                <li >
                    <NavLink to='/SoftSkills' className='navFont' onClick={handleClick}> ¿Por qué Soft Skills? </NavLink>
                </li>
                <li >
                    <NavLink to='/Contactanos' className="contactButton" onClick={handleClick}> Contáctanos </NavLink>
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