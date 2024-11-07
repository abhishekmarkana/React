import React from 'react'
import './App.css';

const Listul = () => {
    let arr = ["Use Array .map", "Not a for Loop", "Give each item a unique key", "Avoid using arry index as the key"];
    let ans = arr.map((i, index) => {
        return <li key={index}>{i}</li>
    })
    return (
        <div className='listli'>
            <div className='main-list'>
                <h1>The "React Way"to Render List</h1>
                <div className='list'>
                    <ul>
                        {ans}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Listul
