import React from 'react';
// CSS
import './custom-button.styles.scss'

const CustomButton = ({backgroundColor,type,inverted,color,text,google,...otherProps}) => (
<button className={`${inverted ? 'inverted': ''} custom-button` || `${google ? ' google-sign-in' : ''}`} 
    type={type} 
    style={{
        backgroundColor,
        color
    }}
    {...otherProps}
    >{text}</button>
)

export default CustomButton;