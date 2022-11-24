import React from 'react'
import Profile from './Profile'
import './style.css';


const ProfileCard = () => {

    return (
        <div>
            <Profile
                firstName='Tony'
                lastName='Stark'
                title='Owner Operator'
            />
        </div>
    )
}

export default ProfileCard