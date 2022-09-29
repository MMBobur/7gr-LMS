<<<<<<< HEAD
// // <<<<<<< HEAD
// import * as React from 'react';
// import { useRoutes, Link, NavLink, useNavigate } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import { Box, Grid, Container,Button } from '@mui/material/';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Logo from "../../assets/logo.png"

// // import Navbar from "../../components/Navbar"
// // import "./index.css"
// // import { routes } from "../../routes/routes"

// // Icons

// import StoreIcon from '@mui/icons-material/Store';
// import DomainIcon from '@mui/icons-material/Domain';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import ApiIcon from '@mui/icons-material/Api';
// import HandymanIcon from '@mui/icons-material/Handyman';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// import SearchIcon from '@mui/icons-material/Search';

// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const drawerWidth = 240;
// // =======
// import React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Typography from "@mui/material/Typography";
// import { data } from "../Sidebar/data";
// import { NavLink } from "react-router-dom";
// import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
// import "./style.css";

// const drawerWidth = 265;
// // >>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0

// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
// // <<<<<<< HEAD
//   const data = [
//     {
//       icon: <StoreIcon fontSize="10px" />,
//       name: "Dashboard",
//       href: "/",
//     },
//     {
//       icon: <DomainIcon fontSize="10px" />,
//       name: "Tables",
//       href: "/table",
//     },
//     {
//       icon: <CreditCardIcon fontSize="10px" />,
//       name: "Billing",
//       href: "/billing",
//     },

//     {
//       icon: <ApiIcon fontSize="10px" />,
//       name: "Virtual Reality",
//       href: "/virtual"
//     },
//     {
//       icon: <HandymanIcon fontSize="10px" />,
//       name: "RTL ",
//       href: "/rtl"
//     },
//     {
//       icon: <PersonRemoveIcon fontSize="10px" />,
//       name: "Profile",
//       href: "/profile",
//     },
//     {
//       icon: <AssignmentIcon fontSize="10px" />,
//       name: "Sign In",
//       href: "/signIn",
//     },
//     {
//       icon: <RocketLaunchIcon fontSize="10px" />,
//       name: "Sign Up",
//       href: "/signUp"
//     },
//     // {
//     //   icon: <MovingIcon fontSize="10px" />,
//     //   name: "Bosqich",
//     //   href: "/bosqich"
//     // },
//     // {
//     //   icon: <PaidIcon fontSize="10px" />,
//     //   name: "Ish haqi ",
//     //   href: "/ishhaqi",
//     // },
//     // {
//     //   icon: <CardTravelIcon fontSize="10px" />,
//     //   name: "xarajat",
//     //   href: "/xarajat",
//     // },
//     // {
//     //   icon: <AccountBoxIcon fontSize="10px" />,
//     //   name: "xodim",
//     //   href: "/xodim",
//     // },
//   ];
//   const Menu = data.map((item, index) => (
//     <Box sx={{borderRadius:"15px",transition:"0.2s",marginLeft:"3%",marginRight:"2%"}}>
//       <NavLink
//       style={{ textDecoration: "none", position: "relative", zIndex: 100 }}
//       to={item.href}
//       key={index}
//     >
//       <Button
//         variant="text"
//         id="btnBox"
//         sx={{
//           width: "100%",
//           px: "16px",
//           py: "11px",
//           color: "black",
//           display: "flex",
//           justifyContent: "start",
//           borderRadius: 2,
//           bgcolor: "transparent",
//         }}
//       >
//         <Box
//           className="iconNav"
//           sx={{
//             display: "flex",
//             alignItems: "center",

//             p: "9px",
//             borderRadius: "22%",
//             mr: "12px",
//             backgroundColor:"#F8F9FA"
//           }}
//         >
//           {item.icon}
//         </Box>
//         <Typography fontSize="14px" className="text" sx={{fontFamily:"sans-serif",fontWeight:"500",color:"#67748E"}}>
//           {item.name}
//         </Typography>
//       </Button>
//     </NavLink>
//     </Box>
//   ));
//   const drawer = (
//     <div >
//       <Toolbar>
//         <Box>
//           <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", widtah: "100%" }}>
//             <Grid xs={12} sm={12} lg={12} md={12} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8%" }}>
//               <img src={Logo} alt="" style={{ width: "18%", height: "80%", ":hover": { cursor: "pointer" } }} />
//               <Typography sx={{ fontFamily: "sans-serif", fontWeight: "550", color: "#3C4E6D", display: "flex", alignItems: "center", paddingLeft: "5%", ":hover": { cursor: 'pointer' } }}> Soft UI Dashboard</Typography>
//             </Grid>
//             <Grid xs={12} sm={12} lg={12} md={12}>
//             </Grid>
//           </Grid>
//         </Box>
//       </Toolbar>
//       {/* <Divider sx={{ width: "90%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F9FA" }} /> */}
//       {/* <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//       <div  style={{position:"absolute",zIndex:"999",width:"100%"}}s>
//       {Menu}
//       </div>
//       {/* <List sx={{ backgroundColor: "#F8F9FA" }}>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;
//   // const content = useRoutes(routes);//content
//   return (
//     <Box sx={{ display: 'flex', backgroundColor: "#F8F9FA" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//           boxShadow: "none",
//           display:"flex",
//           flexDirection:"row",
//           justifyContent: 'space-between',
//           alignItems:"center",
//           backgroundColor:"white"
          
//         }}
//       >
//         <Box>
//         <Toolbar>
//           <IconButton
//             color="default"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {/* <Navbar /> */}
//         </Toolbar>
//         </Box>
//         <Box sx={{paddingRight:"5%",display:"flex",alignItems:"center"}}>
//         <TextField
// 								id="outlined-textarea"
// 								placeholder="Type here..."
// 								size="small"
// 								sx={{ bgcolor: "white", height: "40px",color:"#ADBCD4",borderRadius:"15px" }}
// 								multiline
// 								InputProps={{
// 									startAdornment: (
// 										<InputAdornment position="start">
// 											<IconButton aria-label="delete">
// 												<SearchIcon sx={{color:"#67748E"}}/>
// 											</IconButton>
// 										</InputAdornment>
// 									),
// 								}}
// 							/>
//               <Button variant="outlined" sx={{border:"1.8px solid #CB0C9F",color:"#CB0C9F",fontWeight:"600",fontFamily:"sans-serif",borderRadius:"8px",marginLeft:"5%",marginRight:"5%",width:"50%",":hover":{border:"2px solid #CB0C9F"}}}>ONLINE BUILDER</Button>
//               <Typography sx={{fontFamily:"sans-serif",fontWeight:"600",color:"#67748E",":hover":{cursor:"pointer"},width:"20%"}}>
//                 Sign In
//               </Typography>
//         </Box>
//       </AppBar>
//       <Box
// // =======

//   const drawer = (
//     <List sx={{backgroundColor:'#F8F9FA'}}>
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           py: "24px",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//         }}
//       >
//         <StackedLineChartIcon />
//         <Typography
//           sx={{
//             fontSize: "14px",
//             ml: "5px",
//             fontWeight: "bold",
//             color: "#67748e",
//           }}
//         >
//           Soft UI Dashboard
//         </Typography>
//       </Box>
//       <Divider />

//       {data.map((text, index) => (
//         <ListItem key={index} disablePadding sx={{width:'80%',ml:'auto', mr:'auto'}}>
//           <NavLink
//             style={{
//               textDecoration: "none",
//               position: "relative",
//               zIndex: 100,
//             }}
//             to={text.navi}
//             key={index}
//           >
//             <ListItemButton
//               id="btnBox"
//               variant="text"
//               sx={{
//                 width: "170%",
//                 px: "16px",
//                 py: "11px",
//                 color: "black",
//                 display: "flex",
//                 justifyContent: "start",
//                 borderRadius: 2,
//                 bgcolor: "transparent",
//               }}
//             >
//               <Box
//                 className="iconNav"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   p: "9px",
//                   borderRadius: "22%",
//                   mr: "12px",
//                 }}
//               >
//                 {text.icon}
//               </Box>
//               <ListItemText
//                 fontSize="14px"
//                 className="text"
//                 primary={text.name}
//               />
//             </ListItemButton>
//           </NavLink>
//         </ListItem>
//       ))}
//     </List>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: { xs: "none", sm: "none", lg: "flex", md: "none" }}}>
//       {/* <CssBaseline /> */}
//       <Box
//         // id="sidebar"
// // >>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
// // <<<<<<< HEAD
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
// // =======
//             display: { xs: "none", sm: "none", lg: "flex", md: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
// // >>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
// // <<<<<<< HEAD
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
// // =======
//             display: { xs: "none", sm: "none", lg: "flex", md: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
// // >>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Container>
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, borderRadius: "10px", display: "flex", justifyContent: "center", width: "100%", marginTop: "18%", boxShadow: "1px" }}
//         >
//           <Toolbar />
//           {/* {content} */}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default ResponsiveDrawer;
=======
<<<<<<< HEAD
import * as React from 'react';
import { useRoutes, Link, NavLink, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Grid, Container,Button } from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "../../assets/logo.png"

// import Navbar from "../../components/Navbar"
import "./index.css"
// import { routes } from "../../routes/routes"

// Icons

import StoreIcon from '@mui/icons-material/Store';
import DomainIcon from '@mui/icons-material/Domain';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ApiIcon from '@mui/icons-material/Api';
import HandymanIcon from '@mui/icons-material/Handyman';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import SearchIcon from '@mui/icons-material/Search';

import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const drawerWidth = 240;
=======
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
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
<<<<<<< HEAD
  const data = [
    {
      icon: <StoreIcon fontSize="10px" />,
      name: "Dashboard",
      href: "/",
    },
    {
      icon: <DomainIcon fontSize="10px" />,
      name: "Tables",
      href: "/table",
    },
    {
      icon: <CreditCardIcon fontSize="10px" />,
      name: "Billing",
      href: "/billing",
    },

    {
      icon: <ApiIcon fontSize="10px" />,
      name: "Virtual Reality",
      href: "/virtual"
    },
    {
      icon: <HandymanIcon fontSize="10px" />,
      name: "RTL ",
      href: "/rtl"
    },
    {
      icon: <PersonRemoveIcon fontSize="10px" />,
      name: "Profile",
      href: "/profile",
    },
    {
      icon: <AssignmentIcon fontSize="10px" />,
      name: "Sign In",
      href: "/signIn",
    },
    {
      icon: <RocketLaunchIcon fontSize="10px" />,
      name: "Sign Up",
      href: "/signUp"
    },
    // {
    //   icon: <MovingIcon fontSize="10px" />,
    //   name: "Bosqich",
    //   href: "/bosqich"
    // },
    // {
    //   icon: <PaidIcon fontSize="10px" />,
    //   name: "Ish haqi ",
    //   href: "/ishhaqi",
    // },
    // {
    //   icon: <CardTravelIcon fontSize="10px" />,
    //   name: "xarajat",
    //   href: "/xarajat",
    // },
    // {
    //   icon: <AccountBoxIcon fontSize="10px" />,
    //   name: "xodim",
    //   href: "/xodim",
    // },
  ];
  const Menu = data.map((item, index) => (
    <Box sx={{borderRadius:"15px",transition:"0.2s",marginLeft:"3%",marginRight:"2%"}}>
      <NavLink
      style={{ textDecoration: "none", position: "relative", zIndex: 100 }}
      to={item.href}
      key={index}
    >
      <Button
        variant="text"
        id="btnBox"
        sx={{
          width: "100%",
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
            backgroundColor:"#F8F9FA"
          }}
        >
          {item.icon}
        </Box>
        <Typography fontSize="14px" className="text" sx={{fontFamily:"sans-serif",fontWeight:"500",color:"#67748E"}}>
          {item.name}
        </Typography>
      </Button>
    </NavLink>
    </Box>
  ));
  const drawer = (
    <div >
      <Toolbar>
        <Box>
          <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", widtah: "100%" }}>
            <Grid xs={12} sm={12} lg={12} md={12} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8%" }}>
              <img src={Logo} alt="" style={{ width: "18%", height: "80%", ":hover": { cursor: "pointer" } }} />
              <Typography sx={{ fontFamily: "sans-serif", fontWeight: "550", color: "#3C4E6D", display: "flex", alignItems: "center", paddingLeft: "5%", ":hover": { cursor: 'pointer' } }}> Soft UI Dashboard</Typography>
            </Grid>
            <Grid xs={12} sm={12} lg={12} md={12}>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
      {/* <Divider sx={{ width: "90%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F9FA" }} /> */}
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <div  style={{position:"absolute",zIndex:"999",width:"100%"}}s>
      {Menu}
      </div>
      {/* <List sx={{ backgroundColor: "#F8F9FA" }}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // const content = useRoutes(routes);//content
  return (
    <Box sx={{ display: 'flex', backgroundColor: "#F8F9FA" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          display:"flex",
          flexDirection:"row",
          justifyContent: 'space-between',
          alignItems:"center",
          backgroundColor:"white"
          
        }}
      >
        <Box>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Navbar /> */}
        </Toolbar>
        </Box>
        <Box sx={{paddingRight:"5%",display:"flex",alignItems:"center"}}>
        <TextField
								id="outlined-textarea"
								placeholder="Type here..."
								size="small"
								sx={{ bgcolor: "white", height: "40px",color:"#ADBCD4",borderRadius:"15px" }}
								multiline
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<IconButton aria-label="delete">
												<SearchIcon sx={{color:"#67748E"}}/>
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
              <Button variant="outlined" sx={{border:"1.8px solid #CB0C9F",color:"#CB0C9F",fontWeight:"600",fontFamily:"sans-serif",borderRadius:"8px",marginLeft:"5%",marginRight:"5%",width:"50%",":hover":{border:"2px solid #CB0C9F"}}}>ONLINE BUILDER</Button>
              <Typography sx={{fontFamily:"sans-serif",fontWeight:"600",color:"#67748E",":hover":{cursor:"pointer"},width:"20%"}}>
                Sign In
              </Typography>
        </Box>
      </AppBar>
      <Box
=======

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
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
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
<<<<<<< HEAD
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
=======
            display: { xs: "none", sm: "none", lg: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
<<<<<<< HEAD
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
=======
            display: { xs: "none", sm: "none", lg: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
<<<<<<< HEAD
      <Container>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, borderRadius: "10px", display: "flex", justifyContent: "center", width: "100%", marginTop: "18%", boxShadow: "1px" }}
        >
          <Toolbar />
          {/* {content} */}
        </Box>
      </Container>
=======
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
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
>>>>>>> 2fde66b7e69c405419321bf805efa16a5fba7beb
