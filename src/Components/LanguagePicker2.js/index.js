import React, { useState } from 'react'

const flagsList = [
    { name: 'usa-flag', source: 'https://static.vecteezy.com/system/resources/previews/000/532/212/original/vector-united-states-of-america-flag-usa-flag-america-flag-background.jpg'},
    { name: 'japan-flag', source: 'https://wallpapercave.com/wp/wp3996103.jpg'},
    { name: 'indian-flag', source: 'https://www.happywalagift.com/wp-content/uploads/2015/08/India_flag-2016.jpg'},
    { name: 'spain-flag', source: 'https://apollomarine.co.uk/wp-content/uploads/2018/12/27.327.030.jpg'},
]

const LanguagePicker2 = () => {
    const [flag, setFlag] = useState('')

    return (
        <div>
            <div>
                {
                    flag !== '' ? <img src={flag.source} alt='flags' height='100' width='160'/> : 'Select your language'
                }
            </div>
            {
                flagsList.map((item) => {
                    return ( item.name !== flag.name ? 
                        <button onClick={() => {
                            setFlag(item);
                        }}>
                            <img src={item.source} alt='flags' height='100' width='160'/>
                        </button>
                        : <></>)
                })
            }
        </div>
    )
}

export default LanguagePicker2