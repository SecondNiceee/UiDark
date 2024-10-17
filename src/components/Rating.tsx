import React from 'react';
import Image from '../shared/Image';

const imagesNames = [
    'icon1.png',
    'icon2.png',
    'icon3.png',
    'icon4.png',
    'icon5.png'
]
const Rating = () => {
    return (
        <div className='rating'>
            <div className="rating__icons">
                {imagesNames.map( (e, i) => {
                    return <Image className='rating__icon' key={i} imageName={e} />
                } ) }
            </div>
            <div className="rating__reviews">
                <p className='rating__reviews-text'><span>5.0</span> Based on <span>145</span> Reviews</p>
                <div className="rating__stars">
                    {Array.from({length : 5}).map( (e, i) => {
                        return (
                            <Image key={i} imageName={'Star.svg'} />
                        )
                    } )}
                </div>
            </div>
        </div>
    );
};

export default Rating;