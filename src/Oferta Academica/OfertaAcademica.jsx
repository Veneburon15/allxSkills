import HeadOferta from './HeadOferta/HeadOferta'
import HeroOferta from './HeroOferta/HeroOferta' 
import Form from "../Home/Form/Form"
import Preguntas from "./Preguntas/Preguntas" 
import NuestrosCursos from "./NuestrosCursos/NuestrosCursos"
import './OfertaAcademica.css'

const OfertaAcademica = () => {
    return(
        <body className="ofertaAcademicaDiv">
            <HeadOferta/>
            <HeroOferta/>
            <NuestrosCursos/>
            <Preguntas/>
            <Form/>
        </body>
    )
}

export default OfertaAcademica