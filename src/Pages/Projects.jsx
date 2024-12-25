import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import { Grid , Typography} from "@mui/material"
import { projects } from "../../public/Data/Data"
import ProjectCard from "../Components/Cards/ProjectCard"
export default function Projects(){
    return(
        <>
        <Navbar act={"Projects"}/>
        <Typography sx={{marginTop:6}} align="center" variant="h2">My <span className="spanHead" >Projects</span></Typography>
        <Typography sx={{marginBottom:3}} variant="body1" color="#88c273 !important" align="center">Explore a selection of projects I've worked on to showcase my skills and experience.</Typography>
        <Grid container justifyContent="center" sx={{marginBottom : 6}}>
            {projects.map((p)=>(
                <ProjectCard key={p.titel} tit={p.titel} des={p.des} tool={p.tools} img={p.img} github={p.github}/>
            ))}
        </Grid>
        <Footer/>
        </>
    )
}