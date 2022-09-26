import  React, {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper, Container, Box} from '@mui/material';
import Services from '../../services/subject'
import Button from '@mui/material/Button'
import{useNavigate} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteModal from '../../components/Modal';


export default function BasicTable() {
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Services.getAll().then((res) => {
      setData(res);
      console.log(res);
    });
  },[loading])


  function Delete(id) {
    Services.delete(id).then(setLoading(!loading));
    navigate('/fanlar');
  }
 
  
  return (
    <Container sx={{width:'100%'}}>
     <Box sx={{mt: 1 , mb:2}}>
        <Button variant="outlined" id="btnplus" onClick={() => navigate('/fanlar/added')}>Qoshish +</Button>
      </Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
          <TableCell  sx={{fontWeight: "bold", color: "gray"}} >#</TableCell>
            <TableCell  sx={{fontWeight: "bold", color: "gray"}} align="center">Fanlar</TableCell>
            <TableCell  sx={{fontWeight: "bold", color: "gray"}} align="center">Malumot</TableCell>
            <TableCell  sx={{fontWeight: "bold", color: "gray"}} align="center">Boshqaruv</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.desc}</TableCell>
              <TableCell align="center" sx={{display:' flex', justifyContent: 'center' }}>
            <DeleteModal color="error" ochirish={() => Delete(row.id)}><DeleteIcon color="error"/></DeleteModal>
            <Button color="success" onClick={() => navigate(`/fanlar/edit/${row.id}`)}><ModeEditIcon/></Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};