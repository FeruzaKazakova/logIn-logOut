import React from 'react'
import styled from 'styled-components'
import { Navigation } from './Navigation'

export const Header = ({isLoggedIn, logoutHandler, showUserHandler, showTimerHandler}) => {

  return (
    <StyledHeader>
        <h1>A Typical Page</h1>
        <NavigationCont>
        {isLoggedIn ? <Navigation showTimerHandler={showTimerHandler} showUserHandler={showUserHandler} logoutHandler={logoutHandler} /> : null}
        </NavigationCont>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
background-color: #700170;
padding: 20px 10px;
color: white;
display: flex;
justify-content: space-between;
`

const NavigationCont = styled.div`
width: 300px;
display:flex;
justify-content: space-between;
`