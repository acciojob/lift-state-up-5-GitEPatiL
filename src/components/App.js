
import React, { useState } from "react";
import './../styles/App.css';
import Login from './Login'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
        <h2>Lift State Up</h2>

<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        
        
    </div>
  )
}

export default App
