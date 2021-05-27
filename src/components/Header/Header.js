import React from 'react';

const Header = () => {
    const banner = 'https://i.pinimg.com/originals/7e/62/76/7e62763d59f7a0a284ea2d130cd263b7.jpg'
    
    return (
        <div>
            <img height="300vh" width='100%' src={banner} alt="" />
        </div>
    );
};

export default Header;