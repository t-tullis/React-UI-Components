import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
        <div className ='headerContainer'>
            <div className = 'headerPic'>
                <ImageThumbnail />
            </div>
            <div className = 'bottom-content'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;

