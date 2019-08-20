import React from 'react';
// CSS
import './custom-button.styles.scss'

const CustomButton = ({handleSubmit,backgroundColor,type,color,text}) => (
<button className="custom-button" 
    type={type} 
    style={{
        backgroundColor,
        color
    }}
    onSubmit={handleSubmit}
    >{text}</button>
)

export default CustomButton;