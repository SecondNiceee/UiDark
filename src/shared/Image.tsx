import React, { FC } from 'react';

interface IImage{
    imageName : string
}
const Image:FC<IImage> = ({imageName}) => {
    return (
        <img src={`images/${imageName}`} alt="" />
    );
};

export default React.memo(Image);