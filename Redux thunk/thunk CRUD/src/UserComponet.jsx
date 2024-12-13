import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfun, deletedatafun, insertfun } from './reduxcurd/UserAction'

const UserComponet = () => {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.dataforset.data)



    useEffect(() => {
        dispatch(addfun())
    }, [dispatch])

    const [idata, setIdata] = useState({
        name: '',
        age: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setIdata({
            ...idata,
            [name]: value
        })
    }

    const saveData = (e) => {
        e.preventDefault()

            dispatch(insertfun(idata))
        
        setIdata({
            name: '',
            age: ''
        })

    }
    

    return (
        <div>
            <h2>test</h2>
            <form action="#" onSubmit={saveData}>

                <label htmlFor="Name">Name:</label>
                <input type="text" id='name' name='name' onChange={handleChange} value={idata.name} /> <br /><br />

                <label htmlFor="Age">Age:</label>
                <input type="text" id='age' name='age' onChange={handleChange} value={idata.age} /> <br /><br />

                <input type="submit" name='sub' id='sub' />



            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button onClick={() => dispatch(deletedatafun(item.id))}>del</button>
                                </td>
                               

                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserComponet
