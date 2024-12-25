import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import ObjectiveBox from "../Components/Box/ObjectiveBox"
import SkillsAbility from "../SkillsAbility"
import Education from "../Components/Cards/Education"
export default function Homepage(){
    return(
        <>
        <Navbar act={"Home"}/>
        <ObjectiveBox/>
        <SkillsAbility/>
        <Education/>
        
        <Footer/>
        </>
    )
}