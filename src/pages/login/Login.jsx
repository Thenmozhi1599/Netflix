import "./login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const handleSingIn = (e) =>{
    e.preventDefault();
    navigate("./Home")
  }

  const handleSignUp = (e) =>{
    e.preventDefault();
    navigate("./register")
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton" onClick={e => {handleSingIn(e)}}>Sign In</button>
          <span>
            New to Netflix? <button className="btn" onClick={e => {handleSignUp(e)}}>Sign Up</button>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}