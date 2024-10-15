import React, { FC } from 'react';


interface IText{
    children :React.ReactNode
}
const Text:FC<IText> = ({children}) => {
    return (
        <p>
            {children}
        </p>
    );
};

export default React.memo(Text);