import  React, {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Services from '../../services/subject'
import Button from '@mui/material/Button'
import{useNavigate,useParams,Link} from 'react-router-dom'


export default function BasicTable() {
  const [data, setData] = useState([])
  console.log(data);
 const {id} = useParams()

  useEffect(() => {
    Services.getAll().then((res) => {
      setData(res);
      console.log(res);
    });
  },[])


  function Delete(id) {
    Services.delete(id).then();
  }
 
    // console.log(id);
  
  return (
    <>
    <Button component={Link}to="/add" color='success' variant='contained'>Qoshish</Button>
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
          <TableCell  >#</TableCell>
            <TableCell  align="center">Fanlar</TableCell>
            <TableCell align="center">Malumot</TableCell>
            <TableCell align="center">Boshqaruv</TableCell>
            
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
              <TableCell align="center">
                <Button variant='contained'color="success" component={Link} to={`/edit/${row.id}`}>edit </Button>
                <Button  variant='contained' color="error" onClick={() => Delete(row.id)}>delit</Button>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};