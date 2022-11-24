import React from 'react'

const Profile = ({ firstName, lastName, title }) => {

    return (
        <div className='container'>
            <div className='initial'>{firstName.charAt(0)}{lastName.charAt(0)}</div>
            <div className='name-card'>
                <div className='profile-name'>{firstName} {lastName}</div>
                <div className='title'>{title}</div>
            </div>
        </div>
    )

}

export default Profile