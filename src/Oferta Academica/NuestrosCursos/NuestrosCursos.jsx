import Workshop from "../../Home/Workshop/Workshop"
import './NuestrosCursos.css' 
import Cursos from '../../async'

const NuestrosCursos = () => {
    const cursosContainer = []
    // console.log(Cursos)
    for (let i = 0; i < Cursos.length; i++) {
        const curso = Cursos[i];
        cursosContainer.push(<Workshop key={curso.id} curso={curso} />);
      }

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
            {cursosContainer}
        </section>
    )
}

export default NuestrosCursos