import React from 'react'
import styled from 'styled-components'

export const Navigation = ({logoutHandler,showUserHandler,showTimerHandler}) => {

  const submitHandler = (e) => {
    e.preventDefault();
    logoutHandler()
}


  return (
    <>
    <Buttonn onClick={showUserHandler}>Users</Buttonn>
    <Buttonn onClick={showTimerHandler}>Timer</Buttonn>
    <Buttonn onClick={submitHandler}>Logout</Buttonn>
    </>
  )
}


const Buttonn = styled.button`
background-color: #d159d1;
    padding: 9px 30px;
    border: none;
    border-radius: 24px;
    color: white;
    cursor: pointer;
`