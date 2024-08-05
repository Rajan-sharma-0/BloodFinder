import React, { useContext, useEffect, useState } from "react";
import "./Styles/Signup.css";
import { signup } from "./auth";
import { createUser } from "./users";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";


function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser, isVerified, setIsVerified } = useContext(UserContext);
  // const {  } = useContext(UserContext);
  const navigate = useNavigate();

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      if (password === confirmPassword) {
        console.log("Password and Confirm Password are the same");
        const userCreated = await signup(email, password);
        let userInfo = {
          email: userCreated.email,
          uid: userCreated.uid,
        };
        await createUser(userInfo);
        console.log(userInfo);
        setUser(userInfo);
        navigate('/')
      } else {
        setErrorMessage("Passwords do not match");
      }
    } catch (error) {
      setErrorMessage("Something went wrong: " + error.message);
    }
  };

  return (
    <div className="login">
      <div className="loginMain">
        <form onSubmit={handleSubmit}>
          <div className="title">Sign Up</div>
          <div className="credentials">
            <div className="email">
              <input
                type="email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="showPassword">
              <input
                type="checkbox"
                checked={showPassword}
                id="showPassword"
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
            <div className="confirm-password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}

            <button className="submit" type="submit">
              Sign Up
            </button>
          </div>
          <div className="link">
            <span>
              Already have an account?<Link to="/login">Login</Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
