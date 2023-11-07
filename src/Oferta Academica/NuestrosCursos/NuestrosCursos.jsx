import Workshop from "../../Home/Workshop/Workshop"
import './NuestrosCursos.css'

const NuestrosCursos = () => {
    return(
        <section className="nuestrosCursosSection">
            <h2 className="mainH2">Explora Nuestros Cursos</h2>
            <p>Entenedemos que la educación debe evolucionar contigo, por eso te ofrecemos un estilo innovador de aprendizaje. Explora nuestra oferta académica en la modalidad de Workshops o Taller Teórico Prácticos y lleva tu carrera al siguiente nivel.</p> 
            <Workshop/> {/* HABRIA QUE SACAR EL H2 DEL COMPONENTE PARA QUE ESTO QUEDE IGUAL AL PROTOTIPO SI NO LO DEJAMOS*/}
        </section>
    )
}

export default NuestrosCursos