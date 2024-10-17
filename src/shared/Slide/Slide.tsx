import React from 'react';
import cl from "./Slide.module.scss"
import Image from '../Image';
const Slide = () => {
    return (
        <div className={cl.container}>
            <Image className={cl.sliderImage} imageName='slide1.png' />
        </div>
    );
};

export default Slide;