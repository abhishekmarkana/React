import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const columns = [
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
        field: 'action', headerName: 'Action', type: "button", width: 300,

        renderCell: (params) => {

            const delData = async (id) => {
                await axios.delete(`http://localhost:3000/users/${id}`)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => console.error("Error deleting data: ", err));
            };
            const editData = (id) => {
                axios.patch(`http://localhost:3000/users/${id}`)
                    .then((res) => setData(res.data))
            };


            return (
                <div>
                    <Button variant="contained" color="error" onClick={() => delData(params.id)}>DELETE</Button>
                    <Button variant="contained" color="success" onClick={() => editData(params.id)}>EDIT</Button>
                    <Button variant="contained">View</Button>
                </div>
            )

        }
    },
];

function TableDsp() {

    const [userdata, setUserdata] = useState([]);
    const disp = () => {
        axios.get("http://localhost:3000/users")
            .then((res) => setUserdata(res.data))
    }
    useEffect(() => {
        disp()
        const intervalId = setInterval(disp, 1000);
    }, []);


    const Rows = userdata.map((i, index) => ({
        id: i.id,
        firstName: i.firstName,
        lastName: i.lastName,
        email: i.email
    }));

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={Rows}
                columns={columns}
                sx={{ border: 0, marginLeft: 10 }}
                getRowId={(row) => row.id}
            />
        </Paper>
    );
}

export default TableDsp;
