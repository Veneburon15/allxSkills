import HeroCurso from "./HeroCurso/HeroCurso";
import OfertaCurso from "./OfertaCurso/OfertaCurso";
import Form from "../../Home/Form/Form";
import Preguntas from "./Preguntas/Preguntas";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Cursos from "../../async";  

const Curso = () => {
  const [curso, setCurso] = useState(null);
  let { cursoId } = useParams(); 
  cursoId= parseInt(cursoId)
  useEffect(() => {
    const cargarCurso = async () => {
      try {
        const cursoEncontrado = Cursos.find(cursoFind => cursoFind.id === cursoId); 
        if (cursoEncontrado) {
          setCurso(cursoEncontrado);
        } else {
          console.log("Curso no encontrado");
        }
      } catch (error) {
        console.error(error);
      }
    };

    cargarCurso();
  }, [cursoId]);

  return (
    <main>
      <HeroCurso {...curso} />  
      <OfertaCurso {...curso} /> 
      <Preguntas />
      <Form />
    </main>
  );
};

export default Curso;
