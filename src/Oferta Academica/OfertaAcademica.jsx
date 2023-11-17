import HeadOferta from './HeadOferta/HeadOferta'
import HeroOferta from './HeroOferta/HeroOferta' 
import Form from "../Home/Form/Form"
import NuestrosCursos from "./NuestrosCursos/NuestrosCursos"
import './OfertaAcademica.css'

const OfertaAcademica = () => {
    return(
        <section className="ofertaAcademicaDiv">
            <HeadOferta/>
            <HeroOferta/>
            <NuestrosCursos/>
            <Form/>
        </section>
    )
}

export default OfertaAcademica