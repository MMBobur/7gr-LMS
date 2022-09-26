import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from '@mui/material'
import Service from "../../../services/room";
import { useNavigate, useParams } from "react-router-dom";

export default function BasicTextFields() {
  const [xona, setXona] = useState("");
  const [malumot, setMalumot] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const data = {
    title: xona,
    desc: malumot,
  };

  useEffect(() => {
    Service.getOne(id).then((res) => {
      setXona(res.title);
      setMalumot(res.desc);
    });
  }, []);

  const Put = () => {
    Service.update(id, data).then(navigate("/xona"));
  };
  const Ortga = () => {
    navigate("/xona");
  };

  return (
    <Box
    sx={{display:'flex', justifyContent:'center', width:'100%'}}>
      <Box
        component="form"
        sx={{
          p:3,
          padding: "3%",
          paddingTop: 1,
          width: "90%",
          m:3,
        }}
      >
        <h1 style={{marginBottom:'20px'}}>Xonani yangilash</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <TextField
                onChange={(e) => setXona(e.target.value)}
                value={xona}
                fullWidth
                label="Xona"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <TextField
                onChange={(e) => setMalumot(e.target.value)}
                value={malumot}
                fullWidth
                id="outlined-basic"
                label="Malumot"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginRight: "57px",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={Ortga}
            variant="contained"
            sx={{ marginRight: "20px" }}
          >
            Bekor qilish
          </Button>
          <Button variant="contained" onClick={Put}>
            Yangilash
          </Button>
        </Box> */}
        <Grid sx={{ marginTop: "10px" }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
            sx={{
              justifyContent: { xs: "center", sm: "start", md: "start" },
              display: "flex",
            }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Button
              variant="contained"
              onClick={Ortga}
              sx={{ width: { xs: "100%", sm: "55%", md: "40%" } }}
            >
              Bekor qilish
            </Button>
          </Grid>
          <Grid
            sx={{
              justifyContent: { xs: "center", sm: "end", md: "end" },
              display: "flex",
            }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Button
              variant="contained"
              sx={{ width: { xs: "100%", sm: "40%", md: "30%" } }}
              onClick={Put}
            >
              Yangilash
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}