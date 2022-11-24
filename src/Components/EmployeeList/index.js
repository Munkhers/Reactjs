import React, { useState } from 'react'
import './style.css'
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import avatar5 from './images/avatar5.png'
import avatar6 from './images/avatar6.png'
import avatar7 from './images/avatar7.png'
import avatar8 from './images/avatar8.png'

const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
]

const EmployeeList = () => {
    const [employeeData, setEmployeeData] = useState({
        avatar: null,
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        phone: '',
    })
    const [employeeList, setEmployeeList] = useState([]);
    const [editInfo, setEditInfo] = useState(-1)

    const onFormValueChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setEmployeeData((currState) => ({
            ...currState, [fieldName]: fieldValue
        }))
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        setEmployeeList([...employeeList, {
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            role: employeeData.role,
            company: employeeData.company,
            address: employeeData.address,
            phone: employeeData.phone,
            avatar: avatars[Math.floor(Math.random() * avatars.length)],
            City: employeeData.city,
            State: employeeData.state,
            Address2: employeeData.address2,
        }])
        setEmployeeData({ firstName: '', lastName: '', role: '', company: '', address: '', phone: '', address2: '', city: '', state: '' })
    }

    const onDelete = (employeeIdx) => {
        setEmployeeList((currState) => {
            return currState.filter((c, cIdx) => {return cIdx !== employeeIdx})
        })

    }

    const onEdit = (employee, employerIdx) => {
        setEditInfo(employerIdx)
        setEmployeeData(employee.firstName,
                        employee.lastName,
                        employee.company,  
                        employee.role,
                        employee.state,
                        employee.city,
                        employee.phone,
                        employee.address,
                        employee.address2,
            )
    }
    return (
        <div className='employeeContainer'>

            <form onSubmit={onFormSubmit}>
                <h3>Personal information</h3>

                {/* {employeeData.map(() => {
                    return (
                        <div>
                            <label>
                                First name:<br/>
                                <input type="text" name="firstName" value={employeeData.firstName} required
                                onChange={(e) => {onFormValueChange(e)}}
                                />
                            </label><br/>

                        </div>
                    )
                })} */}
                <label>
                    First name:<br />
                    <input type="text" name="firstName" value={employeeData.firstName} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Last name:<br />
                    <input type="text" name="lastName" value={employeeData.lastName} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Role:<br />
                    <input type="text" name="role" value={employeeData.role} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Company:<br />
                    <input type="text" name="company" value={employeeData.company} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Address:<br />
                    <input type="text" name="address" value={employeeData.address} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Address2:<br />
                    <input type="text" name="address2" value={employeeData.address2}
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    City:<br />
                    <input type="text" name="city" value={employeeData.city} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    State:<br />
                    <input type="text" name="state" value={employeeData.state} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <label>
                    Phone:<br />
                    <input type="number" name="phone" value={employeeData.phone} required
                        onChange={(e) => { onFormValueChange(e) }}
                    />
                </label><br />

                <button type='submit'>Submit form</button>
            </form>

            {employeeList.map((employee, employeeIdx) =>

                <div key={employeeIdx}>
                    <img src={employee.avatar} height={100} width={100} alt='avatar' />
                    <div>{employee.firstName}</div>
                    <div>{employee.lastName}</div>
                    <div>{employee.role}</div>
                    <div>{employee.company}</div>
                    <div>{employee.address}</div>
                    <div>{employee.phone}</div>
                    <button onClick={() => onEdit(employee, employeeIdx)}>edit</button>
                    <button onClick={() => onDelete(employeeIdx)}>delete</button>
                </div>
            )}
        </div>
    )
}
export default EmployeeList