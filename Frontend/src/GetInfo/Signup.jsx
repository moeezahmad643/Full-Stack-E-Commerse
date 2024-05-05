import React, { useState } from "react";
import "./GetInfo.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import encrypt from "../Encrypt/encrypt";

export default function Signup() {
  let [loading, setLoading] = useState(false);
  let nevigate = useNavigate();
  let [showWrong, setShowWrong] = useState(false);
  let [ShowPassword, setShowPassword] = useState(false);

  const handleSignup = async(event) => {
    event.preventDefault();
    console.log(username, email, password);
    setShowWrong(false)
    let NewPassword = encrypt(password)

    let responce = await axios.post("http://localhost:3000/signup", {
      username,
      email,
      password: NewPassword,
    });
    console.log(responce.data);
    if (responce.data.result == "ok") {

      localStorage.setItem("user", JSON.stringify({
        email:email
      }));
      nevigate("/");
    }else if(responce.data.result == "Email already Exist") {
      setShowWrong(true)
    } else {
      setLoading(false);
    }
  };

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <section className="SignupForm">
      <span className="bubble"></span>
      <span className="bubble2"></span>
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Your Name "
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <div className="paswordBox">
            <input
              type={ShowPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            {ShowPassword ? (
              <i onClick={()=>setShowPassword(!ShowPassword)} className="bi bi-eye-slash-fill"></i>
            ) : (
              <i onClick={()=>setShowPassword(!ShowPassword)} className="bi bi-eye-fill"></i>
            )}
          </div>

            {showWrong ? (
            <p className="wrongAlert">The account on this email is already exist</p>
          ) : (
            <></>
          )}
        <div className="miniButton">
          <p>Forgot password?</p>
        </div>

        <button type="submit" >
          Signup
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}
