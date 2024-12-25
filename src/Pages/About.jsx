import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import { Grid,} from "@mui/material"
import AboutBox from "../Components/Box/AboutBox"

export default function About(){
    return(
        <>
        <Navbar act={"About"}/>
        <Grid container>
            <AboutBox/>
        </Grid>
        <Footer/>
        </>
    )
}