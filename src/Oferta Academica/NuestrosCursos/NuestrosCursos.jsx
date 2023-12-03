import Workshop from "../../Home/Workshop/Workshop"
import './NuestrosCursos.css' 
import Cursos from '../../async'

const NuestrosCursos = () => {
    const cursosContainer = []
    for (let i = 0; i < Cursos.length; i++) {
        const curso = Cursos[i];
        cursosContainer.push(<Workshop key={curso.id} curso={curso} />);
      }

    return(
        <section className="nuestrosCursosSection">
            <h2 className="nuestrosH2">Explora Nuestros Cursos</h2>
            <p className="nuestrosP">Sumérgete en nuestra oferta académica y <strong>elige entre una amplia gama</strong> de cursos diseñados para <br /> satisfacer tus necesidades de desarrollo profesional y personal.</p>
            <p className="nuestroPBellow">Filtar por tipo de curso</p>
            <div className="tagsDivs">
                <button className="tagsCourse workshop">Workshop</button>
                <button className="tagsCourse taller">Taller</button>
                <button className="tagsCourse masterclass">Masterclass</button>
            </div>  
            <p className="cantidadDeCursos"> 9 de 9</p>
            <div className="cursosContainer">
                {cursosContainer}
            </div>
            <p className="pageNumerator">{"<"} 1 {">"}</p>
        </section>
    )
}

export default NuestrosCursos