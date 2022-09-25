import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { data } from "../Sidebar/data";
import { NavLink } from "react-router-dom";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import "./style.css";

const drawerWidth = 265;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{backgroundColor:'#F8F9FA'}}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          py: "24px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <StackedLineChartIcon />
        <Typography
          sx={{
            fontSize: "14px",
            ml: "5px",
            fontWeight: "bold",
            color: "#67748e",
          }}
        >
          Soft UI Dashboard
        </Typography>
      </Box>
      <Divider />

      {data.map((text, index) => (
        <ListItem key={index} disablePadding sx={{width:'80%',ml:'auto', mr:'auto'}}>
          <NavLink
            style={{
              textDecoration: "none",
              position: "relative",
              zIndex: 100,
            }}
            to={text.navi}
            key={index}
          >
            <ListItemButton
              id="btnBox"
              variant="text"
              sx={{
                width: "170%",
                px: "16px",
                py: "11px",
                color: "black",
                display: "flex",
                justifyContent: "start",
                borderRadius: 2,
                bgcolor: "transparent",
              }}
            >
              <Box
                className="iconNav"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: "9px",
                  borderRadius: "22%",
                  mr: "12px",
                }}
              >
                {text.icon}
              </Box>
              <ListItemText
                fontSize="14px"
                className="text"
                primary={text.name}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { xs: "none", sm: "none", lg: "flex", md: "none" }}}>
      {/* <CssBaseline /> */}
      <Box
        // id="sidebar"
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "none", sm: "none", lg: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", lg: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
