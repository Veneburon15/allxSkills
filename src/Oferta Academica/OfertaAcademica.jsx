import HeroOferta from './HeroOferta/HeroOferta' 
import Form from "../Home/Form/Form"
import NuestrosCursos from "./NuestrosCursos/NuestrosCursos"
import './OfertaAcademica.css'

const OfertaAcademica = () => {
    return(
        <main className="ofertaAcademicaDiv">
            <HeroOferta/>
            <NuestrosCursos/>
            <Form/>
        </main>
    )
}

export default OfertaAcademica