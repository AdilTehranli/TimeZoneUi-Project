import React from 'react';
import '../slider/Slider.scss';

const Slider = (props) => {
  return (
    <div className='slider'>
        <div className="slider__text">
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}

export default Slider;
