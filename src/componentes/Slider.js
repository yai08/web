import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";
import './Slider.css'

const Slider = () => {
 const listRef = useRef();
 const [currenIndex, setCurrenIndex] = useState(0)


 useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img ")[currenIndex]

    if(imgNode){
        imgNode.scrollIntoView({
            behavior:"smooth"
        });
    }


 },[currenIndex])

 const scroollToImage = (direction) => {
    if(direction === 'prev') {
        setCurrenIndex(curr => {
            const isFirstSlide = currenIndex === 0;
            return isFirstSlide ? 0 : curr -1;
        })
    }else {
        const isLastSlide = currenIndex === data.length -1;
        if(!isLastSlide){
            setCurrenIndex(curr => curr + 1);
        }
    }
  }
 
  const goToSlide = (slideIndex) => {
    setCurrenIndex(slideIndex)
  }
  
    return (
        <div className="main-container">
            <div className="slider-container">
                <div className="leftArrow" onClick={()=> scroollToImage('prev')}>&#10092;</div>
                <div className="rightArrow" onClick={()=> scroollToImage('next')}>&#10093;</div>
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            data.map((item)=>{
                                return <li key={item.id}>
                                        <img src ={item.imgUrl} alt="imagen1"></img>
                                        
                                </li>
                            })
                        }   

                    </ul>
                    
                </div>
                <div className="dots-container">
                    {
                        data.map((_, idx)=>(
                            <div key = {idx} className={`dot-container-item`}
                            onClick={() => goToSlide(idx)}>
                                &#9864;
                            </div>
                        ))

                       
                        
                    }

                
                
                    
                </div>
            </div>
        </div>
    );
}



export default Slider