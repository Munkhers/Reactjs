import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'
import { Table, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const UserCrud = () => {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .create({
                baseURL: 'https://bark-backend.azurewebsites.net',
                headers: {
                    Authorization: 'Bearer 11ZmqvQBIxcnaqeRKJ8wk40L6L7fGf_UE0i0mwKiMp0',
                },
            })
            .post('/api/employee/list', {
                pagination: { current: 1, pageSize: 10 },
                sorter: { field: 'firstName', order: 'descend' },
                search: '',
            })
            .then((res) => {
                if (res.status === 200) {
                    setUserData(res.data.data)
                }
            })

    }, [])

    return (
        <div>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
            <div>
                <Table
                    dataSource={userData}
                    columns={[
                        {
                            title: 'Name',
                            dataIndex: 'firstName',
                            render: (firstName, emplInfo) => {
                                return (
                                    <span style={{ fontSize: 10 }}>
                                        {firstName} {emplInfo.lastName} ({emplInfo.id})
                                    </span>
                                )
                            },
                        },
                        {
                            title: 'Email',
                            dataIndex: 'email',
                        },
                        {
                            title: 'Phone',
                            dataIndex: 'phone',
                        },
                        {
                            title: 'Role',
                            dataIndex: 'role',
                        },
                        {
                            title: 'Created Date',
                            dataIndex: 'createdDate',
                            render: (createdDate) => {
                                return (
                                    <span>{moment(createdDate).format('MM/DD/YYYY h:mm A')}</span>
                                )
                            }
                        },
                        {
                            render: (emplInfo) => {
                                return (
                                    <Button type='primary' onClick={() => {
                                        navigate('../crudedit')
                                    }}>Edit</Button>
                                )
                            }
                        },
                    ]}

                />
                {/* <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Created Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((person) => {
                            return (
                                <tr key={person.id}>
                                    <td><span>{person.firstName}</span> <span>{person.lastName}</span></td>
                                    <td><div>{person.email}</div></td>
                                    <td><div>{person.phone}</div></td>
                                    <td><div>{person.role}</div></td>
                                    <td><div>{moment(person.createdDate).format('MM/DD/YYYY h:mm A')}</div></td>
                                    <td><div>{person.deactivatedDate ? 'Active' : 'Inactive'}</div></td>
                                    <td><button>Edit</button></td>
                                </tr>
                                    )
                        })}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default UserCrud