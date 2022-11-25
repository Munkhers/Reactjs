import React, { useState } from 'react'
import Cell from './card'
import './style.css'


const MemoryGame = () => {
    const [data, setData] = useState([
        { id: 0, value: 'A', status: 'hidden' },
        { id: 1, value: 'A', status: 'hidden' },
        { id: 2, value: 'B', status: 'hidden' },
        { id: 3, value: 'B', status: 'hidden' },
        { id: 4, value: 'C', status: 'hidden' },
        { id: 5, value: 'C', status: 'hidden' },
        { id: 6, value: 'D', status: 'hidden' },
        { id: 7, value: 'D', status: 'hidden' },
        { id: 8, value: 'E', status: 'hidden' },
        { id: 9, value: 'E', status: 'hidden' },
        { id: 10, value: 'F', status: 'hidden' },
        { id: 11, value: 'F', status: 'hidden' },
        { id: 12, value: 'G', status: 'hidden' },
        { id: 13, value: 'G', status: 'hidden' },
        { id: 14, value: 'H', status: 'hidden' },
        { id: 15, value: 'H', status: 'hidden' },
    ])
    // .sort(() => Math.random() - 0.5)


    const [playerTurn, setPlayerTurn] = useState('1');
    const [score, setScore] = useState({ player1: 0, player2: 0 });
    const [current, setCurrent] = useState(-1);

    const onCardClick = (item, index) => {
        if (current === -1) {
            setData(currState => currState.map((item, idx) => [index].includes(idx) ? { ...item, status: 'shown' } : item))
            setCurrent(index);
        } else {
            if (current === index) {
                alert('Click another card');
            } else {
                check(index);
            }
        }
    }
    const newGame = () => {
        setData([
            { id: 0, value: 'A', status: 'hidden' },
            { id: 1, value: 'A', status: 'hidden' },
            { id: 2, value: 'B', status: 'hidden' },
            { id: 3, value: 'B', status: 'hidden' },
            { id: 4, value: 'C', status: 'hidden' },
            { id: 5, value: 'C', status: 'hidden' },
            { id: 6, value: 'D', status: 'hidden' },
            { id: 7, value: 'D', status: 'hidden' },
            { id: 8, value: 'E', status: 'hidden' },
            { id: 9, value: 'E', status: 'hidden' },
            { id: 10, value: 'F', status: 'hidden' },
            { id: 11, value: 'F', status: 'hidden' },
            { id: 12, value: 'G', status: 'hidden' },
            { id: 13, value: 'G', status: 'hidden' },
            { id: 14, value: 'H', status: 'hidden' },
            { id: 15, value: 'H', status: 'hidden' },
        ].sort(() => Math.random() - 0.5));
        setScore({ player1: 0, player2: 0 });
        setPlayerTurn('1');
    }

    const check = (index) => {
        if (data[index].value === data[current].value) {
            // data[current].status = "appeared";
            // data[index].status = "appeared";
            // setData([...data]);
            setData(currState => currState.map((c, cIdx) => [current, index].includes(cIdx) ? { ...c, status: 'appeared' } : c))
            if (playerTurn === '1') {
                setScore((currState) => {
                    return { ...currState, player1: currState.player1 + 1 }
                })

            } else {
                setScore((currState) => {
                    return { player1: currState.player1, player2: currState.player2 + 1 }
                })

            }
        } else {
            setPlayerTurn(playerTurn === '1' ? '2' : '1');
            setData(currState => currState.map((c, cIdx) => [current, index].includes(cIdx) ? { ...c, status: 'wrong' } : c))
            setTimeout(() => {
                setData(currState => currState.map((c, cIdx) => [current, index].includes(cIdx) ? { ...c, status: 'hidden' } : c))
            }, 500);
        }
        setCurrent(-1);
    }
    return (
        <div className='memory-game-container'>
            <h2 className='player-score'>Player 1 score: {score.player1}</h2>
            <div className='game-board'>
                {score.player1 + score.player2 === 8 && <h2 className='player-winner'>
                    {score.player1 > score.player2 ? `Player 1 win with ${score.player1} points.`
                        : score.player1 === score.player2 ? 'Players drawn' : `Player 2 win with ${score.player2} points.`}
                </h2>}
                <button onClick={() => newGame()} className='new-game-button'>New Game</button>
                <h2 className='player-turn'>Turn: Player {playerTurn}</h2>
                <div className='memory-game-table'>
                    {data.map((item, idx) => (
                        <Cell
                            item={item}
                            key={idx}
                            index={idx}
                            onCardClick={(cardItem) => { onCardClick(cardItem, idx) }}
                        />
                    ))}
                </div>
            </div>
            <h2 className='player-score'>Player 2 score: {score.player2}</h2>

        </div>
    )
}

export default MemoryGame