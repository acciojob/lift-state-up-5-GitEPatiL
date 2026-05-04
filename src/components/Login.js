import React from "react";

function Login({isLoggedIn,setIsLoggedIn}){

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsLoggedIn(true)
    }
    return(
      <>
       <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" placeholder="enter username" required /><br/><br/>
        <label>password</label>
        <input type="password" name="password" placeholder="enter password" required /><br/><br/>
        <button type="submit">submit</button>
      </form> 
      </>

    );
}

export default Login;