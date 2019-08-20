import React from 'react';
// CSS
import './custom-button.styles.scss'

const CustomButton = ({backgroundColor,type,color,text,...otherProps}) => (
<button className="custom-button" 
    type={type} 
    style={{
        backgroundColor,
        color
    }}
    {...otherProps}
    >{text}</button>
)

export default CustomButton;