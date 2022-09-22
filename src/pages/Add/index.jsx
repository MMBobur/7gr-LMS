import React, { useState, useEffect } from 'react';
import axios from 'axios';
import get from "../../services/student"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
export default () => {
    let navigate = useNavigate('');
    const Cansel = () => {
        navigate('/students');
    };
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
        console.log(data)
        get.setStudent(data).then(response => {
            console.log(response)
            navigate("/students")
        })
    }
    return (
        <>
            <form style={{ width: "100%", display: "flex", flexDirection: "column" }} onSubmit={handleAdd}>
                <input type="text" placeholder='Ism' name='firstname' style={style} />
                <input type="text" placeholder='Familiya' name="lastname" style={style} />
                <input type="text" placeholder="Tug'ilgan yili" name="birthDate" style={style} />
                <input type="text" placeholder="Telefon raqami" name="phone" style={style} />
                <input type="password" placeholder="Password" name="password" style={style} />
                <input type="text" placeholder="Yashash joyi" name="address" style={style} />
                <input type="text" placeholder="Foydalanuvchi ismi sharifi" name="username" style={style} />
                <input type="text" placeholder="Rasmi" name="image" style={style} />
                <select name="status" style={style} placeholder="Status">
                    <option value="true">ONLINE</option>
                    <option value="false">OFFLINE</option>
                </select>
                <Box sx={{ display: "flex", marginTop: "1%", marginRight: "0%" }}>
                    <Button variant='contained' color='success' type="submit" sx={{ width: "10%", marginLeft: "74.5%" }} onClick={() => {
                        navigate("/table")
                    }}>
                        Bekor qilish
                    </Button>
                    <Button variant='contained' type="submit" color='success' sx={{ width: "10%", marginLeft: "2%" }}>
                        Add
                    </Button>
                </Box>
            </form>
        </>
    );
};