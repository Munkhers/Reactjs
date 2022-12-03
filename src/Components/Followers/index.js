import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import AccountCard from '../CardGithub'

const FollowersCard = () => {
    const [followers, setFollowers] = useState([])
    const navigate = useNavigate()

    const fetchFollowersData = () => {
        axios
            .get('https://api.github.com/users/badishd-icodice-edu/followers')
            .then(res => setFollowers(res.data))
            .catch(() => { })
    }
    useEffect(() => {
        fetchFollowersData()
    }, [])

    return (
        <>
            {followers.map((follower, index) => 
                <div key={index} onClick={() => navigate(`/${follower.login}`)}><AccountCard person={follower} /></div> )}
        </>
    )
}
export default FollowersCard