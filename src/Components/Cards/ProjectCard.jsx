import {Grid} from "@mui/material";
import {Button, Typography} from "@mui/material";
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import SkilBox from "../Box/SkilBox";
export default function ProjectCard({tit, des, tool,img,github}) {
  return (
    <Grid className="ProjectCard" width={100} item md={4} sm={6} xs={12}>
        <Card sx={{maxWidth: 500, margin: 2, backgroundColor : "#212120"}}>
          <CardMedia
            sx={{height: 260}}
            image={img}
          />
          <CardContent>
            <Typography
              className="spanHead"
              gutterBottom
              variant="h5"
              component="div"
            >
              {tit}
            </Typography>
            <Typography variant="body1" sx={{color: "text.secondary"}}>
              {des}
            </Typography>
          </CardContent>
          <SkilBox tool={tool} />
          <CardActions>
            <Button
              className="ProjectBtn"
              sx={{
                fontSize: "14px",
                color: "#88c273 !important",
                borderColor: "#88c273 !important",
                marginBottom: 2,
                marginLeft: 1,
                marginTop: 1,
              }}
              component={"a"}
              href={github}
              variant="outlined"
            >
              View Project
            </Button>
          </CardActions>
        </Card>
    </Grid>
  );
}
