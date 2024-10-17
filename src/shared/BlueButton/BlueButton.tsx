import React, { CSSProperties, FC } from 'react';
import cl from "./BlueButton.module.scss"

interface IBlueButton{
    style? : CSSProperties
}
const BlueButton:FC<IBlueButton> = ({style , ...props}) => {
    return (
        <button style={style ?? {}} className={cl.container} {...props}>
            Sign up
        </button>
    );
};

export default BlueButton;