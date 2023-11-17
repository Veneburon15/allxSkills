import Workshop from "../../Home/Workshop/Workshop"
import './NuestrosCursos.css'

const NuestrosCursos = () => {
    return(
        <section className="nuestrosCursosSection">
            <h2 className="nuestrosh2">Explora Nuestros Cursos</h2>
            <p>Sumérgete en nuestra oferta académica y <span>elige entre una amplia gama</span> de cursos diseñados para satisfacer tus necesidades de desarrollo profesional y personal.</p>
            <p>Filtar por tipo de curso</p>
            <div>
                <button>Workshop</button>
                <button>Cursos</button>
                <button>Masterclass</button>
            </div> 
            <Workshop/> {/* HABRIA QUE SACAR EL H2 DEL COMPONENTE PARA QUE ESTO QUEDE IGUAL AL PROTOTIPO SI NO LO DEJAMOS*/}
            <Workshop/> {/* HABRIA QUE SACAR EL H2 DEL COMPONENTE PARA QUE ESTO QUEDE IGUAL AL PROTOTIPO SI NO LO DEJAMOS*/}
            <Workshop/> {/* HABRIA QUE SACAR EL H2 DEL COMPONENTE PARA QUE ESTO QUEDE IGUAL AL PROTOTIPO SI NO LO DEJAMOS*/}
            <Workshop/> {/* HABRIA QUE SACAR EL H2 DEL COMPONENTE PARA QUE ESTO QUEDE IGUAL AL PROTOTIPO SI NO LO DEJAMOS*/}
        </section>
    )
}

export default NuestrosCursos