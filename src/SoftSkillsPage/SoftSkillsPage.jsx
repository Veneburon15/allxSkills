import MainHero from "./MainHero/MainHero"
import DescriptionSection from './DescriptionSection/DescriptionSection'
import CourseRedirection from './CoursesRedirection/CoursesRedirection'
import ImpactoSkills from'./ImpactoSkills/ImpactoSkills'


function SoftSkillsPage () {
    return (
        <main>
            <MainHero/> 
            <ImpactoSkills/>
            <DescriptionSection/>
            <CourseRedirection/>
        </main>
    )

} 

export default SoftSkillsPage