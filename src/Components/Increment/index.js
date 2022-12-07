import React, { useReducer } from 'react'

const reduceNumber = (currState, action) => {
    switch (action.type) {
        case 'increment':
            return currState + action.data;
        case 'decrement':
            return currState - action.data;
        case 'reset':
            return currState = 0;
        default:
            return currState
    }
}
const CounterUR = () => {
    const [number, updateNumber] = useReducer(reduceNumber, 0)

    return (
        <div>
            <div>{number}</div>
            <button onClick={() => updateNumber({type:'increment', data: 1})}>+1</button>
            <button onClick={() => updateNumber({type:'increment', data: 5})}>+5</button>
            <button onClick={() => updateNumber({type:'increment', data: 10})}>+10</button>
            <button onClick={() => updateNumber({type:'decrement', data: 1})}>-1</button>
            <button onClick={() => updateNumber({type:'decrement', data: 5})}>-5</button>
            <button onClick={() => updateNumber({type:'decrement', data: 10})}>-10</button>
            <button onClick={() => updateNumber({type:'reset', data: 0})}>Reset</button>
        </div>
    )
} 
export default CounterUR