import React, { createContext, useContext, useState } from "react";
import './Styles/Signup.css'
import { login } from "./auth";
// import { createUser } from "./users";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
        const userCreated = await login(email, password, confirmPassword);
        console.log("User successfully signed in")
        let userInfo = {
          email: userCreated.email,
          uid: userCreated.uid
        };
        setUser(userInfo)
        // await createUser(userInfo)
        console.log(userInfo);
      navigate("/registration")
    } catch (error) {
      setErrorMessage('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className="login">
      <div className="loginMain">

     
      <form onSubmit={handleSubmit}>
        <div className="title">Login</div>
        <div className="credentials">
          <div className="email">
            <input
              type="email"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="showPassword">
            <input
              type="checkbox"
              checked={showPassword}
              id="showPassword"
              onChange={() => setShowPassword(prev => !prev)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          
          {errorMessage && <div className="error">{errorMessage}</div>}
          
          <button className="submit" type="submit">
            Login
          </button>
        </div>
        <div className="link">
          <span>Create a new account?<Link to="/signup">Register</Link> </span>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
