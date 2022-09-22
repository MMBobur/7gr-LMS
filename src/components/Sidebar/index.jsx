import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { data } from "./data";
import "./style.css";
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Box
      id="sidebar"
      sx={{
        display: { xs: "none", sm: "none", lg: "flex", md: "none" },
        // position:'fixed',
        width:'45vh'
      }}
    >
      <Grid container sx={{ width: "100%" }} >
        <Grid lg={12} xs={0} sm={0} md={12} item >
          <Box
            sx={{
              width: "100%",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >

            
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
                sx={{ fontSize: "14px", ml: "5px", fontWeight: "bold", color:'#67748e' }}
              >
                Soft UI Dashboard
              </Typography>
            </Box>
            <Divider variant="inset" sx={{ mx: "10%" }} />

            <Box
              sx={{
                mx: "16px",
                mt: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "1.5px",
                pb: "30px",


              }}
            >
              {data.map((item, index) => (
                <NavLink
                  style={{
                    textDecoration: "none",
                    position: "relative",
                    zIndex: 100,
                  }}
                  to={item.navi}
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
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography fontSize="14px" className="text">
                      {item.name}
                    </Typography>
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
