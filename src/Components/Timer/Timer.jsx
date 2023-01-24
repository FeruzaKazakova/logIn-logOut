import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../UI/Card/Card'

export const Timer = () => {
  const [seconds, setSeconds] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds < 60) {
        setSeconds(seconds + 1);
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds]);

  
  return (
    <Card>
      <Timerr>Timer:{seconds}</Timerr>
    </Card>
  );
}
const Timerr = styled.h1`
  text-align: center;
`