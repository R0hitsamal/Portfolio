import {Container, Grid, Typography, Button, Box} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const ObjectiveBox = () => {
  const skills = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "MongoDB Specialist",
    "DevOps Enthusiast",
  ];
  const [skillIdx, setSkillIdx] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSkillIdx((curr) => (curr + 1) % skills.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [skillIdx]);

  return (
    <Container maxWidth="lg">
      <Grid container sx={{minHeight: "90vh"}}>
        <Grid item md={6} xs={12} sx={{alignContent: "center"}}>
          <Typography className="headingOfPage" variant="h2">
            Trust me, I’m a <span className="spanHead">{skills[skillIdx]}</span>
            .
          </Typography>
          <Typography
          className="objective"
            sx={{margin: "20px 0px 20px 0px", fontSize: "1.5rem"}}
            variant="body2"
          >
            I’m Rohit, a passionate developer and technology enthusiast. With
            expertise in web development and a strong ability to solve complex
            challenges, I’m dedicated to creating innovative solutions that make
            an impact.
          </Typography>
          <a href="/Resume/Rohit-Resume(July).pdf" rel="noopener noreferrer" target="_blank">
            <Button
              className="resumebtn"
              variant="contained"
            >
              View My Resume
            </Button>
          </a>
        </Grid>
        <Grid item md={6} xs={12} sx={{alignContent: "center"}}>
          <Box className="objImageContainer">
            {/* <Box className="objImage"></Box> */}
            <img className="profileImg" src="/Images/Main.jpg" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ObjectiveBox;
