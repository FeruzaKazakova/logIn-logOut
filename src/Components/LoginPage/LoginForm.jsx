import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../UI/Button/Button'
import { Card } from '../UI/Card/Card'

export const LoginForm = ({loginHandler}) => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
        setIsEmailValid(enteredEmail.includes("@"))
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
        setIsPasswordValid(enteredPassword.trim().length > 6)
    }

    useEffect(() => {
        setIsFormValid(isEmailValid && isPasswordValid)
    }, [isEmailValid,isPasswordValid]);

    const submitHandler = (e) => {
        e.preventDefault();
        loginHandler()
    }

  return (
    <Card>
    <form>
        <StyledInputContainer>
            <label htmlFor="email">E-mail</label>
            <StyledEmailInputContainer type="email" onChange={emailChangeHandler} value={enteredEmail} />
        </StyledInputContainer>
        <StyledInputContainer>
            <label htmlFor="password">Password</label>
            <StyledInput type="password" onChange={passwordChangeHandler} value={enteredPassword} />
        </StyledInputContainer>
        <ButtonContainer>
        <Button bgColor={'success'} disabled={!isFormValid} onClick={submitHandler}>Login</Button>
        </ButtonContainer>
    </form>
    </Card>
  )
}

const StyledInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`

const StyledInput = styled.input`
    width: 300px;
`
const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
`
const StyledEmailInputContainer = styled.input`
    width: 300px;
    margin-left: 23px;
`