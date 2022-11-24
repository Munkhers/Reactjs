import React, { useState } from 'react'
import usa from './images/usa.png'
import japan from './images/japan.jpg'
import india from './images/india.jpg'
import spain from './images/espain.jpg'

const flagsList = [
    { name: 'usa-flag', source: usa},
    { name: 'japan-flag', source: japan},
    { name: 'indian-flag', source: india},
    { name: 'spain-flag', source: spain},
]

const LanguagePicker = () => {
    const [flag, setFlag] = useState('Select your language')
    const [tempFlagList, setTempFlagList] = useState(flagsList);

    const onFlagSelect = (_flag) => {
        let tempList = flagsList.filter((item) => {
            return item.name !== _flag.name
        });
        setTempFlagList(tempList);
        setFlag(
            <img src={_flag.source} alt='flags' height='100' width='160'/>
        );
    }

    return (
        <div>
            <div>{flag}</div>
            {
                tempFlagList.map(element => {
                    return (
                    <button onClick={() => {
                        onFlagSelect(element);
                    }}>
                        <img src={element.source} alt='flags' height='100' width='160'/>
                    </button>
                    )
                })
            }
        </div>
    )




}

export default LanguagePicker

