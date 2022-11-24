import React, { useState } from 'react'

const Cell = ({item, onCardClick}) => {
    
    return (
        <div className='game-table' onClick={() => {
            onCardClick(item);
        }}>
            <div>{item.value}</div>
        </div>
    )


}

export default Cell