import { useState,useRef } from "react"
import "./register.scss"

import { useNavigate } from "react-router-dom";

export default function Register() {

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/Home")
      }

    const [email,setEmail] = useState("") 
    const [pass,setPass] = useState("") 
    const emailRef = useRef()
    const passRef = useRef()

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = () =>{
        setPass(passRef.current.value)
    }

    

  return (
    <div className="register">
        <div className="top">
        <div className="wrapper">
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
            />
            <button className="loginButton" onClick={e => {handleSubmit(e)}}>Sign In</button>
        </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder="Email address" ref={emailRef}/>
                    <button className="regButton" onClick={handleStart}>Get Started</button>
                </div>
            ):(
                <form className="input">
                    <input type="password" placeholder="Password" ref={passRef}/>
                    <button className="regButton" onClick={e =>{ {handleFinish(e)};{handleSubmit(e)}}}>Get Started</button>
                </form>
            )}
        </div>
    </div>
  )
}
