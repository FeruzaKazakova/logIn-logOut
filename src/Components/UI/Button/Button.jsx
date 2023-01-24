import React from 'react'
import styled from 'styled-components'

export const Button = ({children, bgColor, disabled, onClick}) => {
  return (
  <StyledButton onClick={onClick} bgColor={bgColor} disabled={disabled}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
    background-color: ${(props) => props.bgColor?'#50015f': 'violet'};
    padding: 9px 30px;
    border: none;
    border-radius: 16px;
    color: white;
    :disabled{
        background-color: grey;
    }
`