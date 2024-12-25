import {Grid, Typography, Box, IconButton} from "@mui/material";
import { about } from "../../../public/Data/Data";
import {Avatar} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
const AboutBox = () => {
  return (
    <>
      <Grid item md={8} sm={12}>
        <Typography sx={{marginTop: 7, marginBottom: 2, paddingLeft:3,paddingRight : 3}} variant="h2">
          Hey! I'm <span className="spanHead">Rohit Kumar Samal</span> and I'm a <span className="spanHead">full stack engineer.</span>
        </Typography>
        {about.map((a, idx) => (
          <Typography sx={{marginBottom: 3, paddingLeft:3,paddingRight : 3}} key={idx} variant="body1">
            {a}
          </Typography>
        ))}
        <Box sx={{marginBottom: 5, paddingLeft:3, paddingRight : 3}}>
        <IconButton
          variant="a"
          target="_blank"
          href="https://github.com/R0hitsamal"
        >
          <GitHubIcon className="Iconbtn" />
        </IconButton>
        <IconButton
          variant="a"
          target="_blank"
          href="https://www.instagram.com/rohitt_.exe/"
        >
          <InstagramIcon className="Iconbtn"/>
        </IconButton>
        <IconButton
          variant="a"
          target="_blank"
          href="https://www.linkedin.com/in/rohit-kumar-samal-548b14276"
        >
          <LinkedInIcon className="Iconbtn"/>
        </IconButton>
        <IconButton
          variant="a"
          target="_blank"
          href=" https://x.com/Rohitsamal07?t=hzaaLaNBfGelKoi4_RlRMg&s=08"
        >
          <XIcon className="Iconbtn" />
        </IconButton>
      </Box>
      </Grid>
      <Grid
        item
        md={4}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <Avatar
          alt="Rohit"
          src="/Images/profile.jpg"
          sx={{width: 280, height: 280}}
          style={{marginRight: "15px", border: "4px solid #88c273"}}
        />
      </Grid>
    </>
  );
};

export default AboutBox;
