import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Service from "../../services/steps";
import { Typography, Box, Container, Button } from "@mui/material";
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
    Service.getSteps().then((resp) => {
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
    console.log(id);
    const con = window.confirm("Rostan ham o'chirishni hohlaysizmi?");
    if (con) {
      Service.delSteps(id).then((res) => setLoading(!loading));
    }
  };
  const handleEdit = (item) => {
    const findOnePlase = data.find((itm) => itm.id === item);
    navigate("/inputr", { state: { findOnePlase } });
  };
  const handleAdd = () => {
    navigate("/inputr");
  };
  return (
    <Container>
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
              Steps
            </Typography>
            <TableRow>
              <TableCell className="a">Name</TableCell>
              <TableCell align="left" className="a" sx={{ pl: "30%" }}>
                Email
              </TableCell>
              <TableCell align="left" className="a" sx={{ pl: "40%" }}>
                Employed
              </TableCell>
              <Button
              variant="contained"
              className="a"
              sx={{ ml:"140%", textDecoration: "none" }}
              onClick={() => {
                handleAdd();
              }}

            >
                Add Student
            </Button>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  sx={{ width: "18%" }}
                >
                  {val.title}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  sx={{ width: "18%", pl: "30%" }}
                >
                  {val.desc}
                </TableCell>

                <TableCell align="left" sx={{ width: "13%" }}>
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
                  align="left"
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
                  align="left"
                  className="table"
                  sx={{
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleEdit(val.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    className="btn"
                    type="submit"
                    onClick={() => {
                      handleDelete(val.id);
                    }}
                    sx={{
                      marginLeft: "5%",
                      backgroundColor: "green",
                      borderRadius: "10px",
                    }}
                  >
                    DELETE
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
