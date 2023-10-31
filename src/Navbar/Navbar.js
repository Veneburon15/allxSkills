import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav >
            <div className='logoDiv'>
                <img src={Logo} alt="Logo allxskillz" width={120}/>
            </div> 
            <div className='navDiv'>
                <ul>
                    <li><a href='#'>Oferta academica</a></li>
                    <li><a href='#'>Sobre nosotros</a></li> 
                    <li><a href='#'>¿Por qué Soft Skills?</a></li> 
                    <button className='contactButton'>Contactanos</button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;