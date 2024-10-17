import React, { FC } from 'react';

interface IImage{
    imageName : string,
    className? : string
}
const Image:FC<IImage> = ({imageName, className = ''}) => {

    return (
        <img className={className} src={`images/${imageName}`} alt="" />
    );
};

export default React.memo(Image);