import React, { useState } from 'react'
import Cell from './card'
import './style.css'
import css from './images/css_logo.png'
import edge from './images/edge_logo.png'
import html from './images/html_logo.png'
import javascript from './images/javascript_logo.png'
import node from './images/Node_logo.png'
import phyton from './images/phyton_logo.png'
import react from './images/react_logo.png'
import vscode from './images/Vscode_logo.png'


const MemoryGame = () => {
    const [data, setData] = useState([
        { id: 0, value: "A", img: <img src={css} alt='' height={110}/>,  status: 'hidden' },
        { id: 1, value: 'A', img: <img src={css} alt=''height={110}/>, status: 'hidden' },
        { id: 2, value: 'B', img: <img src={edge} alt=''height={110}/>, status: 'hidden' },
        { id: 3, value: 'B', img:<img src={edge} alt=''height={110}/>, status: 'hidden' },
        { id: 4, value: 'C', img:<img src={html} alt=''height={110}/>, status: 'hidden' },
        { id: 5, value: 'C', img:<img src={html} alt=''height={110}/>, status: 'hidden' },
        { id: 6, value: 'D', img:<img src={javascript} alt=''height={110}/>, status: 'hidden' },
        { id: 7, value: 'D', img:<img src={javascript} alt=''height={110}/>, status: 'hidden' },
        { id: 8, value: 'E', img:<img src={node} alt=''height={80} width={110}/>, status: 'hidden' },
        { id: 9, value: 'E', img:<img src={node} alt=''height={80} width={110}/>, status: 'hidden' },
        { id: 10, value: 'F', img:<img src={phyton} alt=''height={110}/>, status: 'hidden' },
        { id: 11, value: 'F', img:<img src={phyton} alt=''height={110}/>, status: 'hidden' },
        { id: 12, value: 'G', img:<img src={react} alt=''height={110}/>, status: 'hidden' },
        { id: 13, value: 'G', img:<img src={react} alt=''height={110}/>, status: 'hidden' },
        { id: 14, value: 'H', img:<img src={vscode} alt=''height={110}/>, status: 'hidden' },
        { id: 15, value: 'H', img:<img src={vscode} alt=''height={110}/>, status: 'hidden' },
    ].sort(() => Math.random() - 0.5))
  
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
            { id: 0, value: "A", img: <img src={css} alt='' height={110}/>,  status: 'hidden' },
            { id: 1, value: 'A', img: <img src={css} alt=''height={110}/>, status: 'hidden' },
            { id: 2, value: 'B', img: <img src={edge} alt=''height={110}/>, status: 'hidden' },
            { id: 3, value: 'B', img:<img src={edge} alt=''height={110}/>, status: 'hidden' },
            { id: 4, value: 'C', img:<img src={html} alt=''height={110}/>, status: 'hidden' },
            { id: 5, value: 'C', img:<img src={html} alt=''height={110}/>, status: 'hidden' },
            { id: 6, value: 'D', img:<img src={javascript} alt=''height={110}/>, status: 'hidden' },
            { id: 7, value: 'D', img:<img src={javascript} alt=''height={110}/>, status: 'hidden' },
            { id: 8, value: 'E', img:<img src={node} alt=''height={80} width={110}/>, status: 'hidden' },
            { id: 9, value: 'E', img:<img src={node} alt=''height={80} width={110}/>, status: 'hidden' },
            { id: 10, value: 'F', img:<img src={phyton} alt=''height={110}/>, status: 'hidden' },
            { id: 11, value: 'F', img:<img src={phyton} alt=''height={110}/>, status: 'hidden' },
            { id: 12, value: 'G', img:<img src={react} alt=''height={110}/>, status: 'hidden' },
            { id: 13, value: 'G', img:<img src={react} alt=''height={110}/>, status: 'hidden' },
            { id: 14, value: 'H', img:<img src={vscode} alt=''height={110}/>, status: 'hidden' },
            { id: 15, value: 'H', img:<img src={vscode} alt=''height={110}/>, status: 'hidden' },
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
            }, 1500);
        }
        setCurrent(-1);
    }
    return (
        <div className='memory-game-container'>
            <h1 className='player-score'>Player 1 score: {score.player1}</h1>
            <div className='game-board'>
                {score.player1 + score.player2 === 8 && <h1 className='player-winner'>
                    {score.player1 > score.player2 ? `Congratulations! Player 1 win with ${score.player1} points.`
                        : score.player1 === score.player2 ? 'Players drawn' : `Congratulations! Player 2 win with ${score.player2} points.`}
                </h1>}
                <button onClick={() => newGame()} className='new-game-button'>NEW GAME!</button>
                <h1 className='player-turn'>Turn: Player {playerTurn}</h1>
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
            <h1 className='player-score'>Player 2 score: {score.player2}</h1>

        </div>
    )
}

export default MemoryGame