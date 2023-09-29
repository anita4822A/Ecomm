import React,{useState} from "react";
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from "@mui/material";
import { Fastfood } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <Fastfood/>
        My Resturant
        </Typography>
        <Divider/>
      
              <ul className="mobile-navigation">
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
    
  )
 return (
  <>
  <Box>
  <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
    <Toolbar>
    <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
             onClick={handleDrawerToggle} 
            >
              <MenuIcon />
            </IconButton>
    <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
      <Fastfood/>
      My Resturant</Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
    </Toolbar>
    </AppBar>
    <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper":{
                boxSizing:'border-box',
                width: "240px",
              },
            }}
              >
              {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar /> 
        </Box>
        
  </Box>
  
  </>
 );
};
export default Header;