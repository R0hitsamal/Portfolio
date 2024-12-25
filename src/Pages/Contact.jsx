import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import {Box, Typography, Avatar, IconButton} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
export default function Contact() {
  return (
    <>
      <Navbar act={"Contact"} />
      <Box
        sx={{
          height: "90vh",
          // padding: "100px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent : "center",
          marginTop : 2,
          marginBottom : 13,
        }}
      >
        <Typography align="center" variant="h3" gutterBottom>
          Feel free to contact me!
        </Typography>
        <Avatar
          src=" /Images/profile.jpg"
          sx={{width: 200, height: 200}}
          style={{border: "4px solid #88c273"}}
        />
        <Box align="center" sx={{marginTop: 2, display: "flex", gap: 2, marginBottom: 3}}>
          <IconButton
            variant="a"
            target="_blank"
            href="https://github.com/R0hitsamal"
          >
            <GitHubIcon className="Iconbtn" sx={{fontSize: "36px"}} />
          </IconButton>
          <IconButton
            variant="a"
            target="_blank"
            href="https://www.instagram.com/rohitt_.exe/"
          >
            <InstagramIcon className="Iconbtn" sx={{fontSize: "36px"}} />
          </IconButton>
          <IconButton
            variant="a"
            target="_blank"
            href="https://www.linkedin.com/in/rohit-kumar-samal-548b14276"
          >
            <LinkedInIcon className="Iconbtn" sx={{fontSize: "36px"}} />
          </IconButton>
          <IconButton
            variant="a"
            target="_blank"
            href=" https://x.com/Rohitsamal07?t=hzaaLaNBfGelKoi4_RlRMg&s=08"
          >
            <XIcon className="Iconbtn" sx={{fontSize: "34px"}} />
          </IconButton>
        </Box>
        <Typography color="#88c273 !important" gutterBottom>
            <a className="contact" href="mailto:samalrohit2567@gmail.com">Email: samalrohit2567@gmail.com</a>
        </Typography>
        <Typography >
            <a className="contact" href="tel:+919668445712">Phone: +91 9668 445 712</a>
        </Typography>
      </Box>
      <Footer />
    </>
  );
}
