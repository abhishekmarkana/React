import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './index.css'
import Button from '@mui/material/Button';
import axios from 'axios';



const AddUser = () => {
    const [id, setId] = useState('')
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        })
    }

    const saveData = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/users", data)
            .then((res) => console.log(res))
        setData({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <>
            <div className="main">
                <form action="" method='post' onSubmit={saveData}>
                    <TextField id="outlined-basic" name='firstName' label="First Name" variant="outlined" onChange={handleChange} value={data.firstName} />
                    <TextField id="outlined-basic" name='lastName' label="Last Name" variant="outlined" onChange={handleChange} value={data.lastName} />
                    <TextField id="outlined-basic" name="email" label="Email" variant="outlined" onChange={handleChange} value={data.email} />
                    <Button variant="contained" className='bttn' type='submit'>Submit</Button>
                </form>
            </div>
        </>
    )
}

export default AddUser
