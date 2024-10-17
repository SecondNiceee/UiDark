import React from 'react';
import cl from "./Request.module.scss"
import Image from '../Image';
const Request = () => {
    return (
        <div className={cl.container}>
            <Image imageName='ok.svg' />
            <p className={cl.requestText}>Unlimited requests</p>
        </div>
    );
};

export default Request;