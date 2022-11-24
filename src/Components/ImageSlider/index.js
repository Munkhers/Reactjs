import React, { useState } from 'react'
import './style.css'
import { IoIosArrowDropleft } from 'react-icons/io'
import { IoIosArrowDropright } from 'react-icons/io'
import { GoPrimitiveDot } from 'react-icons/go'


const ImageSlider = () => {

    const images = [
        { source: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-1562058.jpg&fm=jpg&_gl=1*l48nvv*_ga*MTg0NDM3NjUyNy4xNjY4MDU1MDYy*_ga_8JE65Q40S6*MTY2ODA1NTA2Mi4xLjEuMTY2ODA1NTA2NC4wLjAuMA..' },
        { source: 'https://images.pexels.com/photos/13416913/pexels-photo-13416913.jpeg?cs=srgb&dl=pexels-ahmet-anak-13416913.jpg&fm=jpg' },
        { source: 'https://images.pexels.com/photos/10081039/pexels-photo-10081039.jpeg?cs=srgb&dl=pexels-erik-schereder-10081039.jpg&fm=jpg' },
        { source: 'https://images.pexels.com/photos/11867629/pexels-photo-11867629.jpeg?cs=srgb&dl=pexels-trang-pham-11867629.jpg&fm=jpg' },
        { source: 'https://images.pexels.com/photos/6321128/pexels-photo-6321128.jpeg?cs=srgb&dl=pexels-stein-egil-liland-6321128.jpg&fm=jpg' },

    ]

    const [activeIndex, setActiveIndex] = useState(0)

    const prevImage = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
    }
    const nextImage = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
    }
    const jumpedImage = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className='image-slider-container'>
            <div className='images-container'>
                {images.map((item, index) => {
                    return (
                        <div className='active-image'>
                            {index === activeIndex && <img key={index} src={item.source} alt="" className='slider-images' />}
                        </div>
                    )
                })}
            </div>
            <div className='arrows'>
                <IoIosArrowDropleft className='left-arrow' onClick={prevImage} />
                <IoIosArrowDropright className='right-arrow' onClick={nextImage} />
            </div>
            <div className='dots-container'>
                {images.map((item, index) => {
                    return <div className={activeIndex === index && 'active-dot'}>
                        <GoPrimitiveDot onClick={() => { jumpedImage(index) }} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ImageSlider