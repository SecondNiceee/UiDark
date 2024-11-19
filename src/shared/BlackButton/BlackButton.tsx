import React, { FC } from 'react';
import cl from "./BlackButton.module.scss";

interface IProps{
    className? : string,
    onCLick? : () => void,
    text? : boolean
}
const BlackButton:FC<IProps> = ({className = "", onCLick = () => {}, text }) => {
    console.log("Рендер блэк баттон")
    return (
        <button onClick={onCLick} className={[className, cl.button].join(' ')}>
            <p>
                Get in touch
            </p>
        </button>
    );
};

export default React.memo(BlackButton);