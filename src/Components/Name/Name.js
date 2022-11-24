import React from 'react'

const Name = (props) => {
    return (
        <div>
            {props.firstName.charAt(0)}. {props.lastName}
        </div>
    )
}

export default Name

