import {
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Hidden,
  Container,
} from "@mui/material";

const Education = () => {
  return (
    <Container maxWidth="lg" sx={{marginTop : 4, marginBottom : 8}}>
      <Typography align="center" variant="h2">My <span className="spanHead">Education</span></Typography>
      <Typography sx={{marginBottom: 4}} align="center" className="spanHead" variant="body1">
        "The beautiful thing about learning is that no one can take it away from
        you."
      </Typography>
      <Grid container spacing={3} sx={{justifyContent: "center", padding: 2}}>
        <Hidden smUp>
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                image="https://portfolio-ap-pink.vercel.app/static/media/gita.842a1a28440c8fe9e4b5.png"
                alt="Gita"
                sx={{width: "100%", height: 195, backgroundSize: "cover"}}
              />
              <CardContent>
                <Typography
                  className="spanHead"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  GITA Autonomous College Bhubaneswar
                </Typography>
                <Typography
                  className="spanHead"
                  variant="body1"
                  color="text.secondary"
                >
                  2023-2027 | Pursuing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item xs={12}>
            <Card sx={{display: "flex"}}>
              <CardMedia
                component="img"
                image="https://portfolio-ap-pink.vercel.app/static/media/gita.842a1a28440c8fe9e4b5.png"
                alt="Gita"
                sx={{width: 200, height: 135, backgroundSize: "cover"}}
              />
              <CardContent>
                <Typography
                  className="spanHead"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  GITA Autonomous College Bhubaneswar
                </Typography>
                <Typography
                  className="spanHead"
                  variant="body1"
                  color="text.secondary"
                >
                  2023-2027 | Pursuing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Education;
