import React from "react";
import './login.css';
import LoginBackground from "./login-background.jpg";
import TextInput from "../TextInput/TextInput";
import CustomButton from "../CustomButton/CustomButton";
import HeaderBar from "../HeaderBar/HeaderBar";
import { useState } from "react";
import RestaurentCard from "../RestaurentCard/RestaurentCard";

const Login = () => {
    // // <h1>{name}</h1>
    // <>
    // <TextInput 

    // />
    // <CustomButton 
    //     className="primary"
    //     type="submit"
    //     value="Login"
    // />
    // </>
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    return(
    <>
    
      <HeaderBar />
      <div className="main-container login-page"  >
        <div className="login-background" style={{backgroundImage:`url(${LoginBackground})`}}>
        </div>
        <div className="login-form">
          <div className="app-logo">
            <img src="./logo.png" alt="logo" />
          </div>
          <form className="login-form" action>
          <h1>Sign In</h1>
          <div className="form-field">
            <TextInput type="text" className="username" placeholder="Username" value={username} onChange={(event) => setUserName(event.target.value)}/>
          </div>
          <div className="form-field">
            <TextInput type="password" className="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="form-field">
            <button className="app-button" type="submit" >LOGIN</button>
          </div>
          <div className="forgot-password-container">
            <span className="forgot-password">Forgot Password?</span>
            <a className="link" href>Click Here</a>
          </div>
          </form>
        </div>
      </div>
    </>
);
    };

export default Login;