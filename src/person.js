import React from 'react'


const PersonComponent = (props) => {
    console.log(props)
    return (
        <div>Hello, {props.firstName}! </div>

    )
}

export default PersonComponent