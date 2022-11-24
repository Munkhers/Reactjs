import React, { useState } from 'react'
import Cell from './card'
import './style.css'


const MemoryGame = () => {
    const [data, setData] = useState([
        {id: 1, value: 'A', stat: ''},
        {id: 2, value: 'A', stat: ''},
        {id: 3, value: 'B', stat: ''},
        {id: 4, value: 'B', stat: ''},
        {id: 5, value: 'C', stat: ''},
        {id: 6, value: 'C', stat: ''},
        {id: 7, value: 'D', stat: ''},
        {id: 8, value: 'D', stat: ''},
        {id: 9, value: 'E', stat: ''},
        {id: 10, value: 'E', stat: ''},
        {id: 11, value: 'F', stat: ''},
        {id: 12, value: 'F', stat: ''},
        {id: 13, value: 'G', stat: ''},
        {id: 14, value: 'G', stat: ''},
        {id: 15, value: 'H', stat: ''},
        {id: 16, value: 'H', stat: ''},
    ].sort(() => Math.random() - 0.5)
    )

    const [pair, setPair] = useState([
        {id: null, value: null, status: 'closed'},
        {id: null, value: null, status: 'closed'},
    ]);

    const onCardClick = (item) => {
        console.log(item);
        if(pair[0].status === 'closed') {
            setPair([
                {id: item.id, value: item.value, status: 'opened'},
                {id: null, value: null, status: 'closed'},
            ])
        } else {
            setPair([
                pair[0],
                {id: item.id, value: item.value, status: 'opened'},
            ])
        }

        setTimeout(() => {
            check();
        }, 500)
    }

    const check = () => {
        console.log(pair);
        if(pair[0].status === 'opened' && pair[1].status === 'opened') {
            if(pair[0].value === pair[1].value) {
                alert('match');
            } else {
                alert('not match');
                setPair([
                    {id: null, value: null, status: 'closed'},
                    {id: null, value: null, status: 'closed'},
                ]);
            }
        }
    }

    return (
        <div className='container'>
            {data.map((item, idx) => (
                <Cell 
                item={item} 
                key={idx}
                onCardClick={(cardItem) => {onCardClick(cardItem)}}
                />
            ))}
        </div>
    )
}

export default MemoryGame