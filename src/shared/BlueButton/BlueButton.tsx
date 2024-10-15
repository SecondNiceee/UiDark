import React, { FC } from 'react';
import cl from "./BlueButton.module.scss"

interface IBlueButton{
    props? : any
}
const BlueButton:FC<IBlueButton> = ({...props}) => {
    return (
        <button className={cl.container}>
            Sign up
        </button>
    );
};

export default BlueButton;