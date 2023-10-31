import Logo from '../Assets/Imagenes/AllxSkills_Logo_Transparente.jpg'

const Navbar = () => {
    return(
        <nav>
            <div>
                <img src={Logo} alt="Logo allxskillz" width={120}/>
            </div> 
            <div>
                <ul>
                    <a><ol>Home</ol></a> 
                    <a><ol>Oferta academica</ol></a> 
                    <a><ol>Sobre nosotros</ol></a>  
                    <button>Contactanos</button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;