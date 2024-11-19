import React, { useState } from 'react';
import Logo from '../../shared/Logo/Logo';
import BlueButton from '../../shared/BlueButton/BlueButton';
import Burger from '../../shared/Burger/Burger';
import BurgerMenu from '../../shared/Burger/BurgerMenu';
import "./_Header.scss";

const Header = () => {
    const [isOpen , setOpen] = useState<boolean>(false)
    return (
        <header className='header'>
            <div className="d-flex header container justify-content-between align-items-center">
                <div className="left d-flex align-items-center" >
                    <Logo />
                    <Burger isOpen = {isOpen} setOpen={setOpen} />
                </div>
                <nav className="d-flex big-nav justify-content-between align-items-center">
                    <p>Home</p>
                    <p>Our works</p>
                    <p>Pricing</p>
                    <p>Get touch</p>
                </nav>
                <div className="log-and-registration d-flex align-items-center">
                    <p>Sign in</p>
                    <BlueButton />
                </div>
            </div>
            <BurgerMenu isOpen = {isOpen} />
        </header>
    );
};

export default React.memo(Header);