import HeroOferta from './HeroOferta/HeroOferta' 
import NuestrosCursos from "./NuestrosCursos/NuestrosCursos"
import './OfertaAcademica.css'
import ContactForm from './ContactForm/ContactForm'

const OfertaAcademica = () => {
    return(
        <main className="ofertaAcademicaDiv">
            <HeroOferta/>
            <NuestrosCursos/>
            <ContactForm/>
        </main>
    )
}

export default OfertaAcademica