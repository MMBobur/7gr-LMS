
import React from "react";
import { useFormik } from "formik";
import { Container, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import Services from '../../services/subject';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 25) {
    errors.title = "Must be 15 characters or less";
  }

  if (!values.desc) {
    errors.desc = "Required";
  } else if (values.desc.length > 250) {
    errors.desc = "Must be 10 characters or less";
  }

  

  return errors;
};

function AddPro() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validate,
    onSubmit: (values) => {
      
      Services.create(values).then(() => {
        navigate("/fanlar");
      });
      // }
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
    },
  });
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ mt: 7, textAlign: "start", alignItems: "center" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title" style={{}}>
            title
          </label>
          <br />
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.title}</div>
          ) : null}
          <br />
          <label htmlFor="desc">Price</label>
          <br />
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.desc ? (
            <div style={{ color: "red" }}>{formik.errors.desc}</div>
          ) : null}
          <br />
          <br />

          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/fanlar")}
          >
            Bekor qilish
          </Button>
          <Button type="submit" variant="contained" color="success" style={{ float: "right" }}>
            Qoshish
          </Button>
        </form>
      </Container>
    </>
  );
}

export default AddPro;