import React from 'react';
import BlackButton from '../shared/BlackButton/BlackButton';
import Image from '../shared/Image';

const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <div className="content">
                    <h1 className='home-title'>Awesome UI Dark Template for Webflow Agency</h1>
                    <BlackButton className='home-black-button' />
                </div>
                <Image imageName='Shine.svg' className='shine'  />
            </div>
        </section>
    );
};

export default React.memo(Home);