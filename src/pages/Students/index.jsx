import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Service from '../../services/student';
import { Typography, Container, Box, Button } from '@mui/material';
import "./index.css"
import Img from "../../assets/img.jpg"
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Manager', 159, 6.0, 24, 4.0),
    createData('Programmer', 237, 9.0, 37, 4.3),
    createData('Executive', 262, 16.0, 24, 6.0),
    createData('Programator', 305, 3.7, 67, 4.3),
    createData('Manager', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate('');
    useEffect(() => {
        Service.getStudents().then((resp) => {
            setData(resp);
            console.log("data=>", resp);
        });
    }, [loading])
    const style1 = {
        borderRadius: "10px", textAlign: "center", color: "white", padding: "6%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", width: "80px"
    }
    const handleDelete = (id) => {
        console.log(id);
        const con = window.confirm("Rostan ham o'chirishni hohlaysizmi?")
        if (con) {
            Service.delStudent(id).then(res => setLoading(!loading));
        }
    }
    return (
        <TableContainer component={Paper} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Table sx={{ minWidth: 850 }} size="medium" aria-label="a dense table">
                <TableHead>
                    <Typography sx={{ fontWeight: "500", color: "#344767", fontSize: "20px", fontFamily: "sans-serif", padding: "4%" }}>
                        Authors table
                    </Typography>
                    <TableRow>
                        <TableCell className='a'>AUTHOR</TableCell>
                        <TableCell align="left" className='a'>FUNCTION</TableCell>
                        <TableCell align="left" className='a'>STATUS</TableCell>
                        <TableCell align="left" className='a'>EMPLOYED</TableCell>
                        <TableCell align="left" className='a'><Button variant='contained' onClick={()=>{
                            navigate("/add")
                        }}>Add Student</Button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((val, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                <img src={val.image} alt="Img" style={{ width: "5%", borderRadius: "10px" }} align="left" />
                                <Box sx={{ marginLeft: "7%" }}>
                                    <Typography sx={{ fontWeight: "550", color: "#344767", fontSize: "15px", fontFamily: "sans-serif" }}>
                                        {val.lastname} {val.firstname}
                                    </Typography>
                                    <Typography sx={{ fontWeight: "550", color: "#A8B3C4", fontSize: "12px", fontFamily: "sans-serif" }}>
                                        ohn@creative-tim.com
                                    </Typography>
                                </Box>
                            </TableCell>{/* {row.calories} */}
                            <TableCell component="th" scope="row" align="left">
                                {val.address}
                            </TableCell>

                            <TableCell align="left">{val.status == true ?
                                <Box style={style1} align="left" className='activ'>ONLINE</Box>
                                :
                                <Box style={style1} align="left" className='activ2'>OFFLINE</Box>
                            }</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "550", letterSpacing: "0.5px", color: "#8392ab", fontFamily: "sans-serif" }}>{val.birthDate}</TableCell>
                            <TableCell align="left" className='table' sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                                <Button
                                >
                                    <Link to="/edit" state={val.id} style={{ textDecoration: "none", color: "blue", fontWeight: "700", fontSize: "20px", }}>Edit</Link>
                                </Button>
                                <Button variant="contained" className='btn' type="submit" onClick={() => {
                                    handleDelete(val.id);
                                }} sx={{ marginLeft: "-50px", backgroundColor: "red", borderRadius: "10px" }}>
                                    DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
