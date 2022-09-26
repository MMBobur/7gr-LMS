import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper, Container} from '@mui/material';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Service from '../../services/room'
import DeleteModal from '../../components/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


export default function DenseTable() {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)


  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [loading])

  const getData = () => {
    Service.getAll().then(res => {
      setdata(res)
    })
  }

  const Delete = (id)=>{
    Service.delete(id).then();
   setLoading(!loading)
  }

  

  return (
    <Container sx={{width:'100%'}}>
      {/* <Button variant='contained' onClick={qoshish} sx={{ fontWeight: 'bold', background: 'linear-gradient(310deg,#141727,#3a416f)' }}>Qo'shish&nbsp; <AddOutlinedIcon /></Button> */}
      <Box sx={{mt: 1 , mb:2}}>
        <Button variant="outlined" id="btnplus" onClick={() => navigate('/xona/added')}>Qoshish +</Button>
      </Box>
      <TableContainer sx={{ marginTop: '20px', maxWidth:'100%'  }} component={Paper}>
        <Table sx={{  }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '5%', p: 2, fontWeight: "bold", color: "gray", fontSize: '18px' }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "gray", fontSize: '18px' }}>Xona</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: "bold", color: "gray", fontSize: '18px' }}>Malumot</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: "bold", color: "gray", fontSize: '18px' }}>Boshqaruv</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ fontSize: '15px', p: 2 }}>{index + 1}</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>{item.title}</TableCell>
                <TableCell align="center" sx={{ fontSize: '15px' }}>{item.desc}</TableCell>
                <TableCell align="center" sx={{ marginLeft: '5%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <Link to={`/xona/edit/${item.id}`} variant='contained' style={{ justifyContent: 'center', borderRadius: '4px', color: '#1976D2', width: '80px', display: 'flex', alignItems: 'center', fontSize: '15px', marginRight: '1%', textDecoration: 'none', }} ><ModeEditIcon /></Link> */}
            <Button color="success" onClick={() => navigate(`/xona/edit/${item.id}`)}><ModeEditIcon/></Button>
                    
                    <DeleteModal color="error" ochirish={() => Delete(item.id)}><DeleteIcon color="error"/></DeleteModal>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

