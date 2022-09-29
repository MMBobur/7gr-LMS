import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Service from "../../services/steps";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InputR = () => {
  const [tit, setTit] = useState("");
  const [des, setDes] = useState("");
  const [open, setOpen] = useState([]);
  const { state } = useLocation();

  let navigate = useNavigate("");
  const Edit = (id) => {
    let data = {
      title: tit,
      desc: des,
    };

    Service.putSteps(id, data).then((res) => {
      navigate("/steps");
    });
  };
  const qoshish = () => {
    Service.setSteps({ title: tit, desc: des })
      .then((res) => {
        console.log(res);
        setOpen(!open);
        navigate("/steps");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (



    <div style={{textAlign:"center", marginTop:"10%"}}>
      <Input
        style={{ margin: "10px", width:"50%" }}
        onChange={(e) => {
          setTit(e.target.value);
        }}
        defaultValue={state.findOnePlase.title}
        placeholder="Enter Name"
      /><br />
      <Input
        style={{ margin: "10px", width:"50%" }}
        onChange={(e) => {
          setDes(e.target.value);
        }}
        defaultValue={state.findOnePlase.desc}
        placeholder="Enter Email"
      /><br />
      <Button
        style={{ margin: "10px",width:"15%" }}
        onClick={() => {
          Edit(state.findOnePlase.id);
        }}
        variant="contained"
      >
        Submit
      </Button>
      <Button style={{ margin: "10px",width:"15%" }} onClick={qoshish} variant="contained">
        Qoshish
      </Button>
    </div>
  );
};

export default InputR;
