import Workshop from "../../Home/Workshop/Workshop"
import './NuestrosCursos.css' 
import Cursos from '../../async' 
import { useState } from 'react';

const NuestrosCursos = () => {
    const [filtro, setFiltro] = useState(null);
    const cursosFiltrados = filtro ? Cursos.filter(curso => curso.tipo.toLowerCase() === filtro) : Cursos;
    
    const handleFilter = (tipo) => {
      console.log('filtro ',filtro,' tipo ',tipo)
        if(filtro === tipo){
        setFiltro(null)
      }else{
            setFiltro(tipo);
        }
    };

    return(
        <section className="nuestrosCursosSection" id="explora">
            <h2 className="nuestrosH2">Explora Nuestros Cursos</h2>
            <p className="nuestrosP">Sumérgete en nuestra oferta académica y <strong>elige entre una amplia gama</strong> de cursos diseñados para <br /> satisfacer tus necesidades de desarrollo profesional y personal.</p>
            <p className="nuestroPBellow">Filtar por tipo de curso</p>
            <div className="tagsDivs">
            <button onClick={() => handleFilter('')} className="tagsCourse ">Todos</button>
            <button onClick={() => handleFilter('workshop')} className="tagsCourse workshop">Workshop</button>
            <button onClick={() => handleFilter('taller')} className="tagsCourse taller">Taller</button>
            <button onClick={() => handleFilter('masterclass')} className="tagsCourse masterclass">Masterclass</button>
            </div>  
            <p className="cantidadDeCursos"> {cursosFiltrados.length} de {Cursos.length}</p>
            <div className="cursosContainer">
              {cursosFiltrados.map(curso => (
                <Workshop key={curso.id} curso={curso} />
              ))}
            </div>
            <p className="pageNumerator">{"<"} 1 {">"}</p>
        </section>
    )
}

export default NuestrosCursos