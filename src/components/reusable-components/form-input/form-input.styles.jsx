import styled, { css } from "styled-components";

const localVariables = {
subColor: '#808080',
mainColor: 	'#000000'

}


const shinkLabel = () => `
    top: -14px;
    font-size: 12px;
    color: ${localVariables.mainColor}

`


export const FormGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
    background-color: white;
    color: ${localVariables.subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${localVariables.mainColor};;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${shinkLabel}
    }
`
