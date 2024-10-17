import React, { FC } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
interface IBurger{
    isOpen : boolean,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const Burger:FC<IBurger> = ({isOpen, setOpen}) => {
    return (
        <>
        <Hamburger label={'burger-label'} color="black" toggle={setOpen} toggled = {isOpen} size={35} duration={0.4} />
        </>
    );
};

export default React.memo(Burger)