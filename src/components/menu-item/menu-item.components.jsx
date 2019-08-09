import React from 'react';

//CSS
import './menu-item.styles.scss';




export const MenuItem = ({title, imageUrl,size}) => {

    return(
        <div className={`${size ? size : ''} menu-item`} >
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`,
        }}></div>
        <div className="content">
            <h1 className="title">
                {title}
            </h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )

}