import Logo from '../Assets/Imagenes/xSkills_Logo_TR.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <div className='logoDiv'>
                <img src={Logo} alt="Logo allxskillz" width={120}/>
            </div> 
            <div className='navDiv'>
                <ul>
                    <li>
                        <a href='#'>Oferta académica</a>
                        <div>
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
                            
                        </div>
                    </li>
                    <li><a href='#'>Sobre nosotros</a></li> 
                    <li><a href='#'>¿Por qué Soft Skills?</a></li> 
                    <button className='contactButton'>Contáctanos</button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;