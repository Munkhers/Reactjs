import React, { useEffect, useState } from 'react' 
import axios from 'axios'

const CNJokes = () => {
    const [joke, setJoke] = useState(null)

    const fetchJokes = () => {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                setJoke(res.data.value)
            })
    }

    useEffect(() => {
        fetchJokes()
    },[])

    return (
        <>
        <div>{joke}</div>
        <button onClick={() => {fetchJokes()}}>
            New Joke!
        </button>
        </>
        
    )
}
export default CNJokes