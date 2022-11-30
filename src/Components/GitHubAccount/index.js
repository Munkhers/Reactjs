import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import AccountCard from '../CardGithub'

const GitHubAccount = () => {
    const [person, setPerson] = useState({})

    const fetchAccountData = () => {
        axios
            .get('https://api.github.com/users/Munkhers')
            .then(res => setPerson(res.data))
            .finally(() => {})
    }
    useEffect(() => {
        fetchAccountData()
    },[])

    return (
        <>
        <AccountCard person={person}/>
        </>
        
    )
}
export default GitHubAccount