import {IconButton, Paper, Typography} from "@mui/material";
import {Box, ListItem, List, ListItemButton, ListItemText} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
const Footer = () => {
  const navItems = ["Home", "About", "Projects", "Contact"];
  return (
    <footer>
      <Paper elevation={0} sx={{padding: "25px 10px", backgroundColor : "black"}}>
        <Typography sx={{color : "#88c273 !important", fontWeight : 700}} variant="h6" align="center" gutterBottom>
          Rohit Kumar Samal
        </Typography>
        <Box>
          <List
            sx={{
              display: "flex", // Make List a flex container
              justifyContent: "center", // Center items horizontally
              alignItems: "center", // Center items vertically (optional)
              padding: 0, // Remove default padding
            }}
          >
            {navItems.map((item) => (
              <ListItem
                key={item}
                disablePadding
                sx={{width: "auto"}} // Allow ListItem to adjust width automatically
              >
                <ListItemButton
                  component={Link} to={`/${item}`}
                  sx={{
                    textAlign: "center",
                    padding: "0.1rem 0.6rem", // Adjust padding if needed
                    borderRadius: "6px",
                    display : { xs : 'none', md : "block"},
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      sx: { color : "#88c273 !important"}, // Adjust typography properties
                      
                    }}
                    primary={item}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box align="center">
          <IconButton variant="a" target="_blank" href="https://github.com/R0hitsamal">
            <GitHubIcon className="Iconbtn"  />
          </IconButton>
          <IconButton variant="a" target="_blank" href="https://www.instagram.com/rohitt_.exe/">
            <InstagramIcon className="Iconbtn" />
          </IconButton>
          <IconButton  variant="a" target="_blank" href="https://www.linkedin.com/in/rohit-kumar-samal-548b14276">
            <LinkedInIcon className="Iconbtn" />
          </IconButton>
          <IconButton variant="a" target="_blank" href=" https://x.com/Rohitsamal07?t=hzaaLaNBfGelKoi4_RlRMg&s=08">
            <XIcon className="Iconbtn" />
          </IconButton>
        </Box>
      </Paper>
    </footer>
  );
};

export default Footer;
