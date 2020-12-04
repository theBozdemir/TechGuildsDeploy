import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Signin.css";
import Logo from "../images/logo.png";

const Loginuser = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="formWrap">
          <div className="formContent">
            <img src={Logo} alt="logo" />
            <h4 className="loginHeader">Sign in to your TechGuilds Portal</h4>
            <form className="login" action="#">
              <input
                className="norm email"
                type="email"
                placeholder="email"
                required
                size="36"
              ></input>
              <br />
              <br />
              <input
                className="norm password"
                type="password"
                placeholder="password"
                required
                size="36"
              ></input>
              <br />
              <br />
              <input className="checkbox" type="checkbox" />
              <label className="signed-in">keep me signed in</label>
              <br />
              <button className="sign">SIGN IN</button>
              <Link>
                <p className="pass">Forgot Password</p>
              </Link>
            </form>
            <Link to="/">
              <p className="go-back">
                <i class="fas fa-chevron-left"></i>back
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginuser;
