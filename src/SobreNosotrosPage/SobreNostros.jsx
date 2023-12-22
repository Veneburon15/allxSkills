import CoursesRedirection from "../SoftSkillsPage/CoursesRedirection/CoursesRedirection"
import HeroNostros from "./HeroNosotros/HeroNosotros"
import NosotrosOferta from "./NosotrosOferta/NosotrosOferta"
import NosotrosTexto from "./NosotrosTexto/NosotrosTexto"
import NosotrosHead from "./NostrosHead/NosotrosHead"


const SobreNosotros = () => {
    return(
        <main className="">
            <NosotrosHead/>
            <NosotrosTexto/>
            <NosotrosOferta/> 
            <HeroNostros/> 
            <CoursesRedirection/> 
        </main>
    )
}

export default SobreNosotros