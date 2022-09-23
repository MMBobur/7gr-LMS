import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteModal from '../../components/DeleteModal'
import Service from '../../services/room'

export default function DenseTable() {
  const [data, setdata] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    Service.getAll().then(res => {
      setdata(res)
    })
  }
  const qoshish = () => {
    navigate('/roomAdd')
  }

  return (
    <Box sx={{p:3}}>
      <Button variant='contained' onClick={qoshish} sx={{ fontWeight: 'bold', background: 'linear-gradient(310deg,#141727,#3a416f)' }}>Qo'shish&nbsp; <AddOutlinedIcon /></Button>
      <TableContainer sx={{ marginTop: '20px' }} component={Paper}>
        <Table sx={{ minWidth: 530 }} size="small" aria-label="a dense table">
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
                    <Link to={`/roomEdit/${item.id}`} variant='contained' style={{ justifyContent: 'center', borderRadius: '4px', color: '#1976D2', width: '80px', display: 'flex', alignItems: 'center', fontSize: '15px', marginRight: '1%', textDecoration: 'none', border: '1px solid #1976D2' }} ><BorderColorOutlinedIcon /> &nbsp;Edit</Link>
                    <DeleteModal id={item.id} service={Service} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

