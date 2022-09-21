import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
    Service.update(id, data).then(navigate("/room"));
  };
  const Ortga = () => {
    navigate("/room");
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: "100px",
        marginLeft: { xs: "0", sm: "240px", md: "300px" },
        padding: "3%",
        paddingTop: 1,
        width: "70%",
        background: "white",
      }}
    >
      <h1>Xonani yangilash</h1>
      <TextField
        onChange={(e) => setXona(e.target.value)}
        value={xona}
        sx={{ width: "40%" }}
        label="Xona"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setMalumot(e.target.value)}
        value={malumot}
        sx={{ width: "50%", marginLeft: "3%" }}
        id="outlined-basic"
        label="Malumot"
        variant="outlined"
      />
      <Box
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
      </Box>
    </Box>
  );
}
