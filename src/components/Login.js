import React from "react";

function Login({isLoggedIn,setIsLoggedIn}){

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsLoggedIn(true)
    }
    return(
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" />
        <label>password</label>
        <input type="text" name="password" />
        <button type="submit">submit</button>
      </form>
    );
}

export default Login;