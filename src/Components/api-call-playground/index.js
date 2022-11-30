import React, { useEffect } from 'react'
import axios from 'axios'

const API = () => {

    useEffect(() => {
        axios.get('https://random-data-api.com/api/v2/beer')
            .then (res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            Hello!
        </div>
    )
} 
export default API