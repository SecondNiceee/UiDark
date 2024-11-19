import React from 'react';
import BlueButton from '../../../../shared/BlueButton/BlueButton';
import Request from '../../../../shared/Ruquest/Request';
import Image from '../../../../shared/Image';

const Pricing = () => {
    return (
        <section className='pricing'>
            <div className="container">
                <div className="pricing__left">
                    <div className="pricing__left-tblock">
                        <h4>Pricing</h4>
                        <p>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
                    </div>
                    <div className="pricing__left-shedulBlock">
                        <h4>Let’s Schedule a Meeting</h4>
                        <BlueButton style = {{
                            paddingTop : "18px",
                            paddingBottom : "18px",
                            width : "100%"
                        }}  />
                    </div>
                </div>
                <div className="pricing__right">
                    <h3 className='pricing__right-title'>
                        Unlimited Services
                    </h3>
                    <p className='pricing__right-text'>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
                    <div className="pricing__right-requests">
                        <div className='pricing__right-requestsBlock'>
                            {Array.from({length : 3}).map((e, i) => {
                                return (
                                    <Request key={i} />
                                )
                            } )}
                        </div>
                        <div className='pricing__right-requestsBlock'>
                            {Array.from({length : 3}).map((e, i) => {
                                return (
                                    <Request key={i} />
                                )
                            } )}
                        </div>
                    </div>
                    <div className="pricing__right-priceBlock">
                        <div className='pricing__right-priceTextBlock'>
                            <h2>$3,250 </h2>
                            <p>/2</p>
                        </div>
                        <Image imageName='ArrowRight.svg' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;