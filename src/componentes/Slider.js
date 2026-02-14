import React, { useState } from "react";
import { data } from "./data";
import './Slider.css'

const Slider = () => {
    const [currenIndex, setCurrenIndex] = useState(0);

    const scroollToImage = (direction) => {
        if(direction === 'prev') {
            setCurrenIndex(curr => curr === 0 ? data.length - 1 : curr - 1);
        } else {
            setCurrenIndex(curr => curr === data.length - 1 ? 0 : curr + 1);
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrenIndex(slideIndex);
    }

    return (
        <div className="main-container">
            <div className="slider-container">
                <div className="leftArrow" onClick={()=> scroollToImage('prev')}>&#10092;</div>
                <div className="rightArrow" onClick={()=> scroollToImage('next')}>&#10093;</div>

                <div className="container-images">
                  <ul style={{ transform: `translateX(-${currenIndex * 100}%)` }}>
                    {data.map(item => (
                        <li key={item.id}>
                            <img src={item.imgUrl} alt="" />
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="dots-container">
                    {data.map((_, idx)=>(
                        <div key={idx} className={`dot-container-item ${currenIndex === idx ? 'active' : ''}`}
                             onClick={() => goToSlide(idx)}>
                            &#9864;
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;