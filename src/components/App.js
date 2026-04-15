
import React, { useState } from "react";
import './../styles/App.css';
import Login from './Login'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
        <h2>Lift State Up Example</h2>

        {
          isLoggedIn ? (<h3>You are logged in</h3>) : (<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>)
        }
        
    </div>
  )
}

export default App
