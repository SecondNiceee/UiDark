
import Icon from '../shared/Icon/Icon';
import Image from '../shared/Image';

const WeDo = () => {
    return (
        <section className='we-do'>
            <div className="container">
                <header>What We do</header>
                <div className="we-do-grid">
                    <div className="item">
                        <div className="block">
                            <Icon iconName='SunIcon.svg' />
                            <h5 className='item-title'>Web Design</h5>
                            <p className='item-text'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="block">
                            <Icon iconName='StarIcon.svg' />
                            <h5 className='item-title'>UI/UX Design</h5>
                            <p className='item-text'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="block">
                            <Icon iconName='BagIcon.svg' />
                            <h5 className='item-title'>Responsive Design</h5>
                            <p className='item-text'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                        </div>
                    </div>
                    <div className="item item-column">
                        <div className='block'>
                            <Icon  iconName='BagIcon.svg' />
                            <h5 className='item-title'>E-commerce Solutions:</h5>
                            <p className='item-text'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                        </div>
                        <Image className='column-img' imageName='photo2.png' />
                    </div>
                    <div className="item item-row">
                        <div className='block'>
                            <Image imageName='WIcon.svg' className='icon-w'/>
                            <h5 className='item-title'>E-commerce Solutions:</h5>
                            <p className='item-text'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                        </div>
                        <Image className='image' imageName='BigW.svg' />
                    </div>
                    <div className="item">
                        <div className="block">
                            <Icon iconName='CodeIcon.svg' />
                            <h5 className='item-title'>Custom Development</h5>
                            <p className='item-text'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeDo;