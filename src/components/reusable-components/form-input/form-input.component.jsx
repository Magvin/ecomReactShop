import React from 'react'
import './form-input.styles.scss'
import { FormGroupContainer, FormInputContainer } from './form-input.styles';

const FormInput =( {handleChange,label,...otherProps} ) => (
    <FormGroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ? (<label className={`${otherProps.value.length} ? 'shrink' :'' form-input-label`}>{ label }</label>) : null
        }
    </FormGroupContainer>
)


export default FormInput;