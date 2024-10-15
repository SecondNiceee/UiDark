import React from 'react';
import cl from "./Logo.module.scss"
import Image from '../Image';
const Logo = () => {
    return (
        <div className={cl.container} >
            <Image imageName='Logo.svg' />
            <p>FasterUI</p>
        </div>
    );
};

export default Logo;