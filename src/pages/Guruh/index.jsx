import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Box, Chip, Button} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Services from "../../services/gurups";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import DeleteModal from '../../components/Modal';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Services.getAll().then((res) => {
      setData(res);
    });
  }, []);

  function Delete(id) {
    // const id = window.localStorage.getItem("ItemId")
   Services.delete(id).then();
   navigate('/guruh')
    // handleClose();
  }

  function Row({ row, index }) {
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow onClick={() => setOpen(!open)} sx={{ "& > *": { borderBottom: "unset" }}} key={index}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>

          </TableCell>
          <TableCell align="center">{index + 1}</TableCell>
          <TableCell align="center">{row.title}</TableCell>
          <TableCell align="center">{row.desc}</TableCell>
          <TableCell align="center">
            {row.status === true ? (
              <Chip size="small" id="statusOKGR" label="Aktiv"/>
            ) : (
              <Chip size="small" id="statusOffGR" label="NoAktiv" />
            )}
          </TableCell>
          <TableCell align="center">{row.darsBoshlanishi}</TableCell>
          <TableCell align="center">{row.dasrTugashi}</TableCell>
          <TableCell align="center" sx={{display:' flex'}}>
            <DeleteModal color="error" ochirish={() => Delete(row.id)}><DeleteIcon color="error"/></DeleteModal>
            <Button color="success" onClick={() => navigate(`/guruh/edit/${row.id}`)}><ModeEditIcon/></Button>
            </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
                  <Table
                    size="small"
                    sx={{ width: "100%" }}
                    aria-label="purchases"
                  >
                    <TableHead>
                      <TableRow key={row.id}>
                        {["","Bosqich", "Dars kunlari", "Xona"].map((item, index) => (
                          <TableCell
                          key={index}
                          sx={{ fontWeight: "bold", color: "gray" }}
                          component="th"
                          scope="row"
                        >
                            {item}{" "}
                        </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell />
                        <TableCell>{row.step}</TableCell>
                        <TableCell>{row.darsKunlari}</TableCell>
                        <TableCell>{row.xonaId}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <Container sx={{width:'100%'}}>
      <Box sx={{mt: 1 , mb:2}}>
        <Button variant="outlined" id="btnplus" onClick={() => navigate('/guruh/added')}>Qoshish +</Button>
      </Box>
    <TableContainer sx={{ maxWidth:'100%'}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {["","#","Nomi","Ma'lumot","Holati","Dars boshlanishi","Dars tugashi","Boshqarish"].map((ele, index) => (
              <TableCell
              key={index}
              align="center"
              sx={{ fontWeight: "bold", color: "gray" }}
            >
              {ele}{" "}
            </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row key={row.id} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};
