import React from 'react';
// CSS
import { CustomButtonContainer } from './custom.button.styles';

const CustomButton = ({text, ...props}) => (
<CustomButtonContainer {...props}>
{text}</CustomButtonContainer>
)

export default CustomButton;