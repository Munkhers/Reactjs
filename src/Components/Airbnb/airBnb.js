import React from 'react'
import AirBnbComponent from '.'
import house1 from './pictures/house1.png'
import house2 from './pictures/house2.png'
import house3 from './pictures/house3.png'
import house4 from './pictures/house4.png'
import './style.css';

const airBnbList = [

    {image : house1, destination: 'Chicago, Illinois', howFar: '13', availability: 'Nov 7-12', price: '$805', rating: '★ 5.0'},
    {image : house2, destination: 'Wisconsin Dells, Wisconsin', howFar: '148', availability: 'Nov 10-17', price: '$450', rating: '★ 4.89'},
    {image : house3, destination: 'Elkhorn, Wisconsin', howFar: '65', availability: 'Nov 1-6', price: '$275', rating: '★ 4.75'},
    {image : house4, destination: 'Michigan city, Indiana', howFar: '51', availability: 'Nov 6-11', price: '$400', rating: '★ 4.2'},
]



const AirBnb = () => {

return (
    <div className='airBnb'>
        {airBnbList.map((item, index) => {
            return <AirBnbComponent house={item} key={index}/>
        })}
    </div>
)

}

export default AirBnb