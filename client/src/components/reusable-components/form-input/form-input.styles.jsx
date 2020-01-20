import styled, { css } from "styled-components";

const localVariables = {
  subColor: "#808080",
  mainColor: "#000000"
};

const shinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${localVariables.mainColor};
`;

export const FormGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

const getLabelStyles = props => {
  if (props.value.length > 0) {
    return shinkLabel;
  } else {
    return;
  }
};
export const FormInputLabelContainer = styled.label`
  color: ${localVariables.subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${getLabelStyles};
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
  border-bottom: 1px solid ${localVariables.mainColor};
  margin: 25px 0;
  ${props => {
    if (props.type === "password") {
      return `letter-spacing: 0.3em`;
    }
  }}
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shinkLabel}
  }
`;
