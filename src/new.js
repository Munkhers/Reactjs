import React, {useState} from "react"

import './style.css';
function XOGame() {
    const [data, setData] = useState([
        {index: 0, value: ''},
        {index: 1, value: ''},
        {index: 2, value: ''},
        {index: 3, value: ''},
        {index: 4, value: ''},
        {index: 5, value: ''},
        {index: 6, value: ''},
        {index: 7, value: ''},
        {index: 8, value: ''},
    ]);
    const [turn, setTurn] = useState('o');
    const [winner, setWinner] = useState('');
    const [isDrawn, setIsDrawn] = useState(false);

    const onClickBoard = (index) => {
        if(data[index].value === "") {
            let tempData = data;
            tempData[index].value = turn;
            setData(tempData);
            setTurn( turn === 'o' ? 'x' : 'o');
            check();
        } else {
            alert("exists !");
        }
    }

    const check = () => {
        if(data[0].value !== '' && data[0].value === data[1].value && data[1].value === data[2].value) {
            setWinner(data[0].value);
            return;
        }
        if(data[3].value !== '' && data[3].value === data[4].value && data[4].value === data[5].value) {
            setWinner(data[3].value);
            return;
        }
        if(data[6].value !== '' && data[6].value === data[7].value && data[7].value === data[8].value) {
            setWinner(data[6].value);
            return;
        }
        if(data[0].value !== '' && data[0].value === data[3].value && data[3].value === data[6].value) {
            setWinner(data[0].value);
            return;
        }
        if(data[1].value !== '' && data[1].value === data[4].value && data[4].value === data[7].value) {
            setWinner(data[1].value);
            return;
        }
        if(data[2].value !== '' && data[2].value === data[5].value && data[5].value === data[8].value) {
            setWinner(data[2].value);
            return;
        }
        if(data[0].value !== '' && data[0].value === data[4].value && data[4].value === data[8].value) {
            setWinner(data[0].value);
            return;
        }
        if(data[2].value !== '' && data[2].value === data[4].value && data[4].value === data[6].value) {
            setWinner(data[2].value);
            return;
        }

        if(winner === ''
            && data[0].value !== '' && data[1].value !== '' && data[2].value !== ''
            && data[3].value !== '' && data[4].value !== '' && data[5].value !== ''
            && data[6].value !== '' && data[7].value !== '' && data[8].value !== '') {
            setIsDrawn(true);
        }
    }

    const newGame = () => {
        let tempData = data;
        tempData.forEach((item, index) => {
            tempData[index].value = '';
        })
        setData(tempData);
        setTurn('o');
        setWinner('');
        setIsDrawn(false);
    }

    return (
        <div>
            <div>
                <button onClick={() => {newGame()}}>New game</button>
            </div>
            <div>{winner !== '' && '' + winner + ' player won.'}</div>
            <div>{isDrawn && 'Players drawn'}</div>
            <div className="grid-container">
                {
                    data.map((item, index) => {
                        return <div
                            key={index}
                            onClick={() => {onClickBoard(index)}}
                            className="grid-item"
                        >
                            {item.value}
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default XOGame;