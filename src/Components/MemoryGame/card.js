import React from 'react'
import question from './images/question.gif'


const Cell = ({ item, index, onCardClick }) => {

    return (
        <div className={'game-table card' + item.status} onClick={() => {
            (item.status === 'hidden') && onCardClick(item, index)}}
            >
            {
                item.status === 'hidden' ?
                <img src={question} height={90}  alt=''/>
                :
                <div>{item.img}</div>
            }
        </div>
    )
}
export default Cell