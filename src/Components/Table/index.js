import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const Table = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios
            .get('https://random-data-api.com/api/v2/users?size=10')
            .then((res) => {
                if (res.status === 200) {
                    setTableData(res.data)
                    // console.log(res.data)
                }
            })
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={2}>Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Employment</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((person) => {
                        return <tr key={person.id}>
                            <td><img src={person.avatar} alt='' height={50} width={50}/></td>
                            <td><div className='table-text'>{person.first_name}</div></td>
                            <td><div className='table-text'>{person.last_name}</div></td>
                            <td><div className='table-text'>{person.gender}</div></td>
                            <td><div className='table-text'>{person.date_of_birth}</div></td>
                            <td><div className='table-text'>{person.email}</div></td>
                            <td><div className='table-text'>{person.phone_number}</div></td>
                            <td><div className='table-text'>{person.username}</div></td>
                            <td><div className='table-text'>{person.employment.title}{person.employment.key_skill}</div></td>
                            <td><div className='table-text'>{person.address.street_address}{person.address.city}{person.address.state}</div></td>
                            <td>
                                <div className='table-button'>
                                <button className='edit-button'>Edit</button>
                                <button className='delete-button'>Delete</button>
                                </div>
                                
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Table