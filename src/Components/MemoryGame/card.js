import React from 'react'

const Cell = ({ item, index, onCardClick }) => {

    return (
        <div className={'game-table card' + item.status} onClick={() => {
            onCardClick(item, index)}}>
            <div>{item.value}</div>
        </div>
    )
}
export default Cell