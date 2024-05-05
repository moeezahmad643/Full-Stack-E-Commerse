import React, { useState } from "react";
import "./GetInfo.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import encrypt from "../Encrypt/encrypt";

export default function Login() {
  let [loading, setLoading] = useState(false);
  let [showWrong, setShowWrong] = useState(false);
  let [ShowPassword, setShowPassword] = useState(false);
  let nevigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setShowWrong(false);

    console.log(email, password);

    let NewPassword = encrypt(password);

    let responce = await axios.post("http://localhost:3000/login", {
      email,
      password: NewPassword,
    });
    console.log(responce.data);
    if (responce.data.result == "ok") {
      nevigate("/");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
        })
      );
    } else {
      setLoading(false);
      setShowWrong(true);
    }
  };

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <section className="loginForm">
      <span className="bubble"></span>
      <span className="bubble2"></span>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
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
            <p className="wrongAlert">You Password Or Email are not Correct</p>
          ) : (
            <></>
          )}
          <div className="miniButton">
            <p>Forgot password?</p>
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account <Link to="/signup">Signup</Link>{" "}
          </p>
        </form>
      )}
    </section>
  );
}
