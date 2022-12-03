import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AccountCard from '../CardGithub'
import { useParams } from 'react-router-dom'

const GitHubAccount = () => {
    const [person, setPerson] = useState({})
    // console.log(useParams())
    const {loginName} = useParams()
    
    useEffect(() => {
        const fetchAccountData = () => {
            axios
                .get(`https://api.github.com/users/${loginName}`)
                .then(res => setPerson(res.data))
                .catch(() => { })
        }
        fetchAccountData()
        
    }, [loginName])

    return (
        <>
            <AccountCard person={person} />
        </>
    )
}
export default GitHubAccount