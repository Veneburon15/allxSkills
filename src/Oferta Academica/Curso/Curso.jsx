import HeroCurso from "./HeroCurso/HeroCurso"
import HeroExito from "./HeroExito/HeroExito"
import DetallesCurso from "./DetallesCurso/DetallesCurso"
import OfertaCurso from "./OfertaCurso/OfertaCurso"
import Inscribite from "./Inscribite/Inscribite"
import Preguntas from "../Preguntas/Preguntas"
import Form from "../../Home/Form/Form"

const Curso = () => { 
    return(
    <main>
        <HeroCurso/> 
        <HeroExito/> 
        <DetallesCurso/> 
        <OfertaCurso/> 
        <Inscribite/> 
        <Preguntas/>
        <Form/>
        
    </main>
    )
}

export default Curso