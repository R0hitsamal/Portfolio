import React from "react";
import {techData} from "../../../public/Data/Data";
import { Grid, Paper, Typography } from "@mui/material";

const TechList = () => (
  <Grid container spacing={3} sx={{justifyContent : "center", padding : 2}}>
    {techData.map((tech, index) => (
      <Grid className="techListCard" item xs={4} sm={3} md={2}key={index}>
        <Paper elevation={1} className="techDataCards">
        <div style={{padding : "10px 20px 10px 20px"}}>
          <img
            src={tech.icon}
            alt={tech.title}
            style={{width: "80px", height: "80px"}}
          />
        </div>
        <Typography variant="subtitle1" sx={{paddingBottom : "10px"}}>{tech.title}</Typography>
        </Paper>
      </Grid>
      
    ))}
  </Grid>
);

export default TechList;
