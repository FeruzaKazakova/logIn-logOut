import { useEffect, useState } from 'react';
import {Header} from './Components/Header/Header';
import {LoginForm} from './Components/LoginPage/LoginForm';
import { Timer } from './Components/Timer/Timer';
import { Users } from './Components/Users/Users';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isShowUser,setIsShowUsers] = useState(false)
  const [isShowTimer, setIsShowTimer] = useState(false)

  const showUserHandler = () => {
    setIsShowUsers(true)
    setIsShowTimer(false)
  }

  const showTimerHandler = () => {
    setIsShowUsers(false)
    setIsShowTimer(true)
  }

  useEffect(() => {
    const res = localStorage.getItem('AUTH')
    setIsLoggedIn(!!res)
  },[])

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("AUTH", JSON.stringify(true))
  };


  const logoutHandler = () => {
    localStorage.removeItem('AUTH');
    setIsLoggedIn(false);
  };

  const firstSituation = isLoggedIn && isShowUser;
  const secondSituation = isShowTimer && isLoggedIn;
  const thirdSituation = !isShowTimer && !isShowUser && isLoggedIn;

  return (
    <div className="App">
      <Header showTimerHandler={showTimerHandler} showUserHandler={showUserHandler} logoutHandler={logoutHandler} isLoggedIn={isLoggedIn}/>
      {!isLoggedIn && <LoginForm loginHandler={loginHandler} />}
       {thirdSituation && <Users/>}
       {firstSituation && <Users/>}
       {secondSituation && <Timer/>}
    </div>
  );
}

export default App;
