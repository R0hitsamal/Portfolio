import {Container, Grid, Typography, Button, Box} from "@mui/material";
import {useEffect, useState} from "react";

const ObjectiveBox = () => {
  const skills = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "MongoDB Specialist",
    "DevOps Enthusiast"
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIdx((prevIdx) => (prevIdx + 1) % skills.length);
    }, 3000);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [idx]); // Depend on `idx` to trigger re-render

  return (
    <Container maxWidth="lg">
      <Grid container sx={{minHeight: "90vh"}}>
        <Grid item md={6} xs={12} sx={{alignContent: "center"}}>
          <Typography variant="h2">
            Trust me, I’m a <span className="spanHead">{skills[idx]}</span>.
          </Typography>
          <Typography
            sx={{margin: "20px 0px 20px 0px", fontSize: "1.5rem"}}
            variant="body2"
          >
            I’m Rohit, a passionate developer and technology enthusiast. With
            expertise in web development and a strong ability to solve complex
            challenges, I’m dedicated to creating innovative solutions that make
            an impact.
          </Typography>
          <Button className="resumebtn" variant="contained">
            View My Resume
          </Button>
        </Grid>
        <Grid item md={6} xs={12} sx={{alignContent: "center"}}>
          <Box className="objImageContainer">
            <Box className="objImage"></Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ObjectiveBox;
