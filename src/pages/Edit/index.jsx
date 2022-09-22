import React, { useState, useEffect } from 'react';
import axios from 'axios';
import get from "../../services/student"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
export default () => {
    const [data, setData] = useState(undefined);
    let navigate = useNavigate('');
    let location = useLocation('');
    const id = location.state
    const style = {
        width: "90%",
        padding: "1%",
        display: "flex",
        alignItems: "center",
        marginLeft: "4%",
        fontSize: "18px",
        fontWeight: "700",
        marginTop: "2%"
    }
    useEffect(() => {
        axios.get("http://localhost:8080/api/students/" + location.state).then(res => setData(res.data))
    }, [])
    const handleAdd = (e) => {
        e.preventDefault();
        let data = {
            subject: ['78494486'],
            groups: ['1231231232'],
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            birthDate: e.target.birthDate.value,
            phone: e.target.phone.value,
            image: e.target.image.value,
            password: e.target.password.value,
            address: e.target.address.value,
            username: e.target.username.value,
            status: e.target.status.value,
        }
        console.log(id);
        get.putStudent(id, data).then(response => {
            navigate("/students")
        })
    }
    return (
        <>
            {!data ? "loading..."
                :
                <form style={{ width: "100%", display: "flex", flexDirection: "column" }} onSubmit={handleAdd}>
                    <input type="text" placeholder='Ism' name='firstname' style={style} defaultValue={data.firstname} />
                    <input type="text" placeholder='Familiya' name="lastname" style={style} defaultValue={data.lastname} />
                    <input type="text" placeholder="Tug'ilgan yili" name="birthDate" style={style} defaultValue={data.birthDate} />
                    <input type="text" placeholder="Telefon raqami" name="phone" style={style} defaultValue={data.phone} />
                    <input type="password" placeholder="Password" name="password" style={style} defaultValue={data.password} />
                    <input type="text" placeholder="Yashash joyi" name="address" style={style} defaultValue={data.address} />
                    <input type="text" placeholder="Foydalanuvchi ismi sharifi" name="username" style={style} defaultValue={data.username} />
                    <input type="text" placeholder="Rasmi" name="image" style={style} defaultValue={data.image} />
                    <select name="status" style={style} placeholder="Status">
                        <option value="true">ONLINE</option>
                        <option value="false">OFFLINE</option>
                    </select>
                    <Box sx={{ display: "flex", marginTop: "1%", marginRight: "0%" }}>
                        <Button variant='contained' color='success' type="submit" sx={{ width: "10%", marginLeft: "74.5%" }} onClick={() => {
                            navigate("/students")
                        }}>
                            Bekor qilish
                        </Button>
                        <Button variant='contained' color='success' type="submit" sx={{ width: "10%", marginLeft: "2%" }}>
                            Add
                        </Button>
                    </Box>
                </form>}
        </>
    );
};
