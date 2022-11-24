import React, {useState} from 'react'
import './style.css'

const ImageSlider = () => {
// Step 1: Declare a state that takes an array with image url.
// Step2: Declare a state that saves active index of the images.
// Step 3: For pre/next functionality, we decrement/increment the active index state.
// Step 4: When clicking on the circles below it should display the image of that circle.
    const [images, setImages] = useState ([
        {name: 'first', source: 'unsplash.com/photos/78A265wPiO4'},
        {name: 'second', source: 'unsplash.com/photos/01_igFr7hd4'},
        {name: 'third', source: 'unsplash.com/photos/cssvEZacHvQ'},
        {name: 'fourth', source: 'unsplash.com/photos/1Z2niiBPg5A'},
        {name: 'fifth', source: 'unsplash.com/photos/jFCViYFYcus'},
    ])
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <img src={images.source} alt='' className='images'/>


        </div>
    )
}

export default ImageSlider