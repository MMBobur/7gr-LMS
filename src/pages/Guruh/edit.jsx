/* eslint-disable no-dupe-keys */
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Container, Button, Box } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import Services from "../../services/gurups";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 15) {
    errors.title = "Must be 15 characters or less";
  }

  if (!values.desc) {
    errors.desc = "Required";
  } else if (values.desc.length > 15) {
    errors.desc = "Must be 10 characters or less";
  }


  if (!values.darsBoshlanishi) {
    errors.darsBoshlanishi = "Required";
  } else if (values.darsBoshlanishi.length > 15) {
    errors.darsBoshlanishi = "Must be 5 characters or less";
  }

  if (!values.dasrTugashi) {
    errors.dasrTugashi = "Required";
  } else if (values.dasrTugashi.length > 200) {
    errors.dasrTugashi = "Must be 200 characters or less";
  }


  // if (!values.darsKunlari) {
  //   errors.darsKunlari = "Required";
  // } else if (values.darsKunlari.length > 200) {
  //   errors.darsKunlari = "Must be 200 characters or less";
  // }

  // if (!values.xonaId) {
  //   errors.xonaId = "Required";
  // } else if (values.xonaId.length > 200) {
  //   errors.xonaId = "Must be 200 characters or less";
  // }

   // if (!values.step) {
  //   errors.step = "Required";
  // } else if (values.step.length > 200) {
  //   errors.step = "Must be 200 characters or less";
  // }

  return errors;
};

function EditGuruh() {
  const { id } = useParams();
  const navigate = useNavigate();

  //   ////////////////////// edit ///////////////////////////

  useEffect(() => {
    Services.getOne(id).then((res) => {
      // console.log("jnjnjn = ",res);
      formik.setValues({
        ...formik.values,
        title: res.title,
        desc: res.desc,
        status: res.status,
        darsBoshlanishi: res.darsBoshlanishi,
        dasrTugashi: res.dasrTugashi,
        darsKunlari: res.darsKunlari,
        xonaId: res.xonaId,
        step: res.step,
      });
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      status: "",
      darsBoshlanishi: "",
      dasrTugashi: "",
      darsKunlari: [1,3,5],
      status: false,
      xonaId: "",
      step: "",
    },
    validate,
    onSubmit: (values) => {
      // eslint-disable-next-line no-lone-blocks
      {
        id
          ? Services.update(id, values).then(() => {
              navigate("/guruh");
            })
          : 
          Services.create(values).then(() => {
              navigate("/guruh");
            });
      }

      //   alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 3, textAlign: "start" }}>
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
          {formik.errors.title ? (
            <div style={{ color: "red" }}>{formik.errors.title}</div>
          ) : null}
          <br />

          <label htmlFor="desc">desc</label>
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

          {/* <label htmlFor="status">status</label>
          <br />
          <input
            id="status"
            name="status"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.status}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.status ? (
            <div style={{ color: "red" }}>{formik.errors.status}</div>
          ) : null}
          <br /> */}

          <label htmlFor="darsBoshlanishi">darsBoshlanishi</label>
          <br />
          <input
            id="darsBoshlanishi"
            name="darsBoshlanishi"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.darsBoshlanishi}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.darsBoshlanishi ? (
            <div style={{ color: "red" }}>{formik.errors.darsBoshlanishi}</div>
          ) : null}
          <br />

          <label htmlFor="address">dasrTugashi</label>
          <br />
          <input
            id="dasrTugashi"
            name="dasrTugashi"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.dasrTugashi}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.dasrTugashi ? (
            <div style={{ color: "red" }}>{formik.errors.dasrTugashi}</div>
          ) : null}
          <br />

          {/* <label htmlFor="password">step</label>
          <br />
          <input
            id="step"
            name="step"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.step}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.step ? (
            <div style={{ color: "red" }}>{formik.errors.step}</div>
          ) : null}
          <br /> */}

          {/* <label htmlFor="birthDate">darsKunlari</label>
          <br />
          <input
            id="darsKunlari"
            name="darsKunlari"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.darsKunlari}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.darsKunlari ? (
            <div style={{ color: "red" }}>{formik.errors.darsKunlari}</div>
          ) : null}
          <br /> */}

          {/* <label htmlFor="image">xonaId</label>
          <br />
          <input
            id="xonaId"
            name="xonaId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.xonaId}
            style={{ width: "100%", height: "30px" }}
          />
          {formik.errors.xonaId ? (
            <div style={{ color: "red" }}>{formik.errors.xonaId}</div>
          ) : null} */}
          <br />

          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Status"
              id="status"
              name="status"
              onChange={formik.handleChange}
            value={formik.values.status}
            />
          </FormGroup>
          <br />
          <Box>
          <Button
         
            variant="outlined"
            id="btnDel"
            onClick={() => navigate("/guruh")}
          >
            Bekor qilish
          </Button>
          <Button
    
            type="submit"
            variant="outlined"
            id="btnplus"
            style={{ float: "right" }}
          >
            Qoshish
          </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default EditGuruh;
