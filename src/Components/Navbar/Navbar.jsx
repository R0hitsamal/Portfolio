import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
const drawerWidth = 240;
const navItems = ["Home", "About", "Projects", "Contact"];

function DrawerAppBar({act}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link} to={`/${item}`}
              sx={{textAlign: "center",  padding : "6px 6px", borderBottom : "1px solid black"}}
            >
              <ListItemText
                primaryTypographyProps={{
                  sx: {fontSize: "18px"}, // Adjust typography properties
                }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Toolbar sx={{height: "74px"}}>
        <Avatar
          alt="Rohit"
          src="/Images/ProfileImg.jpg"
          sx={{width: 40, height: 40}}
          style={{marginRight: "15px", border: "2px solid #88c273"}}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{flexGrow: 1, color: "#88c273 !important", fontWeight: 600}}
        >
          Rohit Kumar Samal
        </Typography>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{display: {md: "none"}}}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{display: {xs: "none", md: "block"}}}>
          {navItems.map((item) => (
            <Button
            component={Link} to={`/${item}`}
              key={item}
              sx={{
                color: act === item ? "#88c273 !important" : "#fff",
                borderBottom: act === item ? "2px solid #88c273" : "#fff",
                borderRadius: "0px",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: "block", md: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </Container>
  );
}

export default DrawerAppBar;
