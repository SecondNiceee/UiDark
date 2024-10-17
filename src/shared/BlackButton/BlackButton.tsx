import React, { FC } from 'react';
import cl from "./BlackButton.module.scss";

interface IProps{
    className? : string
}
const BlackButton:FC<IProps> = ({className = ""}) => {
    return (
        <button className={[className, cl.button].join(' ')}>
            <p>
                Get in touch
            </p>
        </button>
    );
};

export default React.memo(BlackButton);