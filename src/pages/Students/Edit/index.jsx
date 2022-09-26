import React, { useState, useEffect } from 'react';
import axios from 'axios';
import get from "../../services/student"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Typography, Grid } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import MenuItem from '@mui/material/MenuItem';

import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import "./index.css"


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Matematika',
    'Ona tili',
    'Informatika',
    'Tarix',
    'Fizika',
    'Kimyo',
    'Geografiya',
    'Biologia',
    'Ingliz tili',
    'Rus tili',
];



const currencies = [
    {
        value: 'true',
        label: 'Active',
    },
    {
        value: 'false',
        label: 'No Active',
    },
];


const groups = [
    {
        value: 'Group1',
        label: '1-Gurux',
    },
    {
        value: 'Group2',
        label: '2-Gurux',
    },
    {
        value: 'Group3',
        label: '3-Gurux',
    },
    {
        value: 'Group4',
        label: '4-Gurux',
    },
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
export default () => {
    const [data, setData] = useState(undefined);
    let navigate = useNavigate('');
    let location = useLocation('');
    const [currency, setCurrency] = React.useState([]);

    const [personName, setPersonName] = React.useState([]);
    const theme = useTheme();

    const handleChangge = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const id = location.state
    useEffect(() => {
        axios.get("http://localhost:8080/api/students/" + location.state).then(res => setData(res.data))
    }, [])
    const handleAdd = (e) => {
        e.preventDefault();
        let data = {
            subject: [e.target.subject.value],
            groups: [e.target.groups.value],
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
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleChannge = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangee = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <>
            {!data ? "loading..."
                :
                <form style={{ width: "100%", display: "flex", flexDirection: "column", }} onSubmit={handleAdd}>
                    <Typography sx={{ fontFamily: "sans-serif", color: "green", fontWeight: "600", fontSize: "28px", justifyContent: "center", display: "flex" }}>
                        Edit Page
                    </Typography>
                    <Grid container spacing={1} sx={{ display: "flex", width: "100%", flexDirection: "row", marginTop: "2%" }}>
                        <Grid xs={12} md={6} sm={12} lg={6} sx={{ width: "50%", display: "flex", alignItems: "center", flexDirection: "column", paddingBottom: "10%" }}>
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%", paddingBottom: "0.5%" }} align="left">
                                Ism
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="Ismni kiritng"
                                placeholder="Ism"
                                multiline
                                name="firstname"
                                defaultValue={data.firstname}
                                sx={{ width: "80%", }}
                            />
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Familiya
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="Familiyani kiriting"
                                placeholder="Familiya"
                                multiline
                                name="lastname"
                                defaultValue={data.lastname}
                                sx={{ width: "80%" }}
                            />
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Tug'ilgan sana
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="Tug'ulgan sanani kiriting"
                                placeholder="Tug'ilgan yili"
                                multiline
                                name="birthDate"
                                defaultValue={data.birthDate}
                                sx={{ width: "80%" }}
                            />
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Telefon raqam
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="Telefon raqamni kiriting"
                                placeholder="Telefon raqami"
                                multiline
                                name="phone"
                                defaultValue={data.phone}
                                sx={{ width: "80%" }}
                            />
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Password
                            </Typography>
                            <FormControl sx={{ width: '80%', padding: "0px" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    // value={values.password}
                                    name="password"
                                    onChange={handleChange('password')}
                                    defaultValue={data.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Yashash joy
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="Yashash joyni kiriting"
                                placeholder="Yashash joyi"
                                multiline
                                name="address"
                                defaultValue={data.address}
                                sx={{ width: "80%" }}
                            />
                        </Grid>
                        <Grid xs={12} md={6} sm={12} lg={6} sx={{ width: "50%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingBottom: "0.5%", paddingTop: "2%" }} align="left">
                                O'quvchi logini
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="O'quvchi logini"
                                placeholder="O'quvchi logini"
                                multiline
                                name="username"
                                defaultValue={data.username}
                                sx={{ width: "80%" }}
                            />
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                O'quvchi surati
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label="O'quvchi surati"
                                placeholder="O'quvchi surati"
                                multiline
                                name="image"
                                defaultValue={data.image}
                                sx={{ width: "80%" }}
                            />
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Faollik
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                select
                                label="Active yoki No Active likni tanlang"
                                name="status"
                                defaultValue={data.status}
                                onChange={handleChangee}
                                sx={{ width: "80%" }}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}

                            </TextField>
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Guruxlar
                            </Typography>
                            <FormControl sx={{ m: 1, width: "80%" }}>
                                <InputLabel id="demo-multiple-chip-label">Guruxlar</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    defaultValue={data.groups}
                                    name="groups"
                                    onChange={handleChannge}
                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {groups.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name.value}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Typography sx={{ fontFamily: "sans-serif", color: "#666", fontWeight: "600", fontSize: "18px", paddingTop: "2%", paddingBottom: "0.5%" }} align="left">
                                Fanlar
                            </Typography>

                            <FormControl sx={{ m: 1, width: '80%' }}>
                                <InputLabel id="demo-multiple-checkbox-label">Fanlar</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    defaultValue={data.subject}
                                    name="subject"
                                    onChange={handleChangge}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} defaultValue={data.subject}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Box sx={{ display: "flex", marginRight: "20%", alignItems: "space-between", flexDirection: "row", width: "100%", justifyContent: "flex-end", marginBottom: "2%", marginTop: "5%" }}>
                                <Button variant='contained' color='success' type="submit" sx={{ marginRight: "0%" }} onClick={() => {
                                    navigate("/students")
                                }}>
                                    Qaytish
                                </Button>
                                <Button variant='contained' color='success' type="submit" sx={{ marginLeft: "2%", backgroundColor: "blue" }}>
                                    Add +
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>}
        </>
    );
};
