import React, { FC } from 'react';
import cl from "./Icon.module.scss"
import Image from '../Image';
interface IIcon{
    className? : string,
    iconName : string
}
const Icon:FC<IIcon> = ({iconName,className = ""}) => {
    return (
        <div className={[cl.container,className].join(' ')}>
            <Image className='img' imageName={iconName} />
        </div>
    );
};

export default React.memo(Icon);