import Logo from '../Assets/Imagenes/AllxSkills_Logo_Transparente.jpg'

const Footer = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="AllxSkillz Logo" width={120}/>
                <p>Copyright@allxskills 2023</p>
            </div>
            <div>
                <h3>Secciones</h3>
                <a><p>Sobre Nosotros</p></a>
                <a><p>Oferta Academica</p></a>
                <a><p>Contacta</p></a>
            </div>
            <div>
                <h3>Contacto</h3>
                <a><p>Email</p></a>
                <a><p>Telefono</p></a>
            </div>
            <div>
                <h3>Seguínos!</h3>
                <a><p>Redes Sociales</p></a>
            </div>
        </div>
    )
} 

export default Footer