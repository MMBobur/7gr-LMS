import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Container } from '@mui/material';
import Services from '../../services/subject'

import { useNavigate, useParams } from "react-router-dom";



const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 55) {
    errors.title = 'Must be 15 characters or less';
  }

  if (!values.desc) {
    errors.desc = 'Required';
  } else if (values.desc.length > 30) {
    errors.desc = 'Must be 10 characters or less';
  }


  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};


function EditPro () {

  const {id}= useParams();
  const navigate = useNavigate();

  //   ////////////////////// edit ///////////////////////////

  useEffect(() => {
    Services.getId(id)
       .then((res) => {
         // console.log("jnjnjn = ",res);
         formik.setValues({
           ...formik.values,
            title: res.title,
            desc: res.desc,
         });
       });
   }, []);
   
     
   

  
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validate,
    onSubmit: values => {
      Services.update(id,values).then(() => {
          navigate("/fanlar");
        });
      // }
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
    },
  });
  return (
    <>
    <Container maxWidth='sm' sx={{ mt: 3, textAlign:'start' }}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title" style={{}}>Fanlar</label><br />
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          style={{ width: '100%', height: '30px' }}
        />
        {formik.errors.title ? <div style={{color:'red'}}>{formik.errors.title}</div> : null}
        <br />

        <label htmlFor="price">Malumot</label><br />
        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
          style={{ width: '100%', height: '30px' }}
        />
        {formik.errors.desc ? <div style={{color:'red'}}>{formik.errors.desc}</div> : null}
        <br />
   

        <button onClick={() => navigate("/fanlar")} >Bekor qilish</button>
        <button type="submit" style={{float:'right'}}>Qoshish</button>
      </form>
    </Container>
    </>
  );
};

export default EditPro;