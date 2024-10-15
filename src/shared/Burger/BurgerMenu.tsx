import React, { FC } from 'react';
import cl from "./Burger.module.scss"

interface IBurgerMenu{
    isOpen : boolean,
}
const BurgerMenu:FC<IBurgerMenu> = ({isOpen}) => {
    
    return (
        <nav className={isOpen ? [cl.menu, cl.menuActive].join(' ') : cl.menu}>
              <p>Home</p>
              <p>Our works</p>
              <p>Pricing</p>
              <p>Get touch</p>
              <p className={cl.smFlex}>Sign in</p>
              <p className={[cl.smFlex, cl.registration].join(' ')}>Sign up</p>
        </nav>
    );
};

export default BurgerMenu;