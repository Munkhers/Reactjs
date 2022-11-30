import React from 'react'
import './style.css'

const AccountCard = ({person}) => {

    return (
        <>
            <div>{person.login}</div>
            <img src={person.avatar_url} height={100} alt=''/>
            <div>{person.bio}</div>
            <div>{person.followers}</div>
            <div>{person.following}</div>
            <div>{person.public_repos}</div>
        </>
    )
}
export default AccountCard 