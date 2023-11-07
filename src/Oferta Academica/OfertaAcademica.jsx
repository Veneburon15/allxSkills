import Workshop from "../Home/Workshop/Workshop"
import Navbar from "../Navbar/Navbar"
import HeroOferta from './Hero Oferta/HeroOferta' 
import Form from "../Home/Form/Form"
import Preguntas from "./Preguntas/Preguntas" 
import Footer from "../Footer/Footer"
import './OfertaAcademica.css'

const OfertaAcademica = () => {
    return(
        <div className="ofertaAcademicaDiv">
            <h2 className="mainH2">Oferta Académica</h2>
            <p>Desarrolla las actitudes y hábitos que te impulsarán a destacar <br/> como profesional en todos los campos y roles.</p>
            <button className="heroButton">Contáctanos</button>
            <HeroOferta/>
            <div>
                <h2 className="mainH2">Explora Nuestros Cursos</h2>
                <p>Entenedemos que la educación debe evolucionar contigo, por eso te ofrecemos un estilo innovador de aprendizaje. Explora nuestra oferta académica en la modalidad de Workshops o Taller Teórico Prácticos y lleva tu carrera al siguiente nivel.</p> 
                <Workshop/> {/* HABRIA QUE SACAR EL H2 DEL COMPONENTE PARA QUE ESTO QUEDE IGUAL AL PROTOTIPO SI NO LO DEJAMOS*/}
                <Preguntas/>
                <Form/>
            </div>
        </div>
    )
}

export default OfertaAcademica