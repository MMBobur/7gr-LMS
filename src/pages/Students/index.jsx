import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Service from "../../services/student";
import { Typography, Container, Box, Button } from "@mui/material";
import "./index.css";
import Img from "../../assets/img.jpg";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteModal from '../../components/Modal';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Manager", 159, 6.0, 24, 4.0),
  createData("Programmer", 237, 9.0, 37, 4.3),
  createData("Executive", 262, 16.0, 24, 6.0),
  createData("Programator", 305, 3.7, 67, 4.3),
  createData("Manager", 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate("");
  useEffect(() => {
    Service.getStudents().then((resp) => {
      setData(resp);
      console.log("data=>", resp);
    });
  }, [loading]);
  const style1 = {
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    padding: "6%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    width: "80px",
  };
  const handleDelete = (id) => {
      Service.delStudent(id).then((res) => setLoading(!loading));
  };
  return (
    <Container sx={{width:'100%'}}>
        <Box sx={{mt: 1 , mb:2}}>
        <Button variant="outlined" id="btnplus" onClick={() => navigate('/talaba/added')}>Qoshish +</Button>
      </Box>
    <TableContainer component={Paper} sx={{ display: "flex" }}>
      <Table sx={{ minWidth: 850 }} size="medium" aria-label="a dense table">
        <TableHead>
          <Typography
            sx={{
              fontWeight: "500",
              color: "#344767",
              fontSize: "20px",
              fontFamily: "sans-serif",
              padding: "4%",
            }}
          >
            Students
          </Typography>
          <TableRow>
            <TableCell className="a">Ism Sharifi</TableCell>
            <TableCell align="center" className="a">
              Telefor raqami
            </TableCell>
            <TableCell align="center" className="a">
              Adress
            </TableCell>
            <TableCell align="center" className="a">
              Faollik
            </TableCell>
            <TableCell align="center" className="a">
              Tug'ulgan sanasi
            </TableCell>
            <TableCell align="center" className="a">
              Boshqaruv
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" width="15%">
                <Box sx={{ marginLeft: "7%" }}>
                  <Typography
                    sx={{
                      fontWeight: "550",
                      color: "#344767",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      display: "flex",
                      alignItems: "center",
                      width: "30%",
                      padding: "2%",
                      letterSpacing: "1px",
                    }}
                  >
                    {val.lastname} {val.firstname}
                  </Typography>
                </Box>
              </TableCell>
              {/* {row.calories} */}
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ width: "18%" }}
              >
                {val.phone}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ width: "15%" }}
              >
                {val.address}
              </TableCell>

              <TableCell align="center" sx={{ width: "13%" }}>
                {val.status == true ? (
                  <Box style={style1} align="left" className="activ">
                    Active
                  </Box>
                ) : (
                  <Box style={style1} align="left" className="activ2">
                    No Active
                  </Box>
                )}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "550",
                  letterSpacing: "0.5px",
                  color: "#8392ab",
                  fontFamily: "sans-serif",
                  width: "25%",
                }}
              >
                {val.birthDate}
              </TableCell>
              <TableCell
                align="center"
                className="table"
                sx={{
                  display:'flex',
                  justifyContent: "center",
                  width: "80%",
                  alignItems: "center",
                }}
              >
              <DeleteModal color="error" ochirish={() => handleDelete(val.id)}><DeleteIcon color="error"/></DeleteModal>
                <Button component={Link}  to="/talaba/edit"   state={val.id}>
                  
                    <ModeEditIcon />
                 
                </Button>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
