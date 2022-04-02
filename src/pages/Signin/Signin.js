import axios from 'axios'
import React from 'react'
import { useContext, useState } from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { ThemeContext } from '../../Context/ThemeContextProvider';

const Signin = () => {
  const {  setToken, setUser } = useContext(AuthContext)
  const {theme}=useContext(ThemeContext)
  const testCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  }
  let navigate = useNavigate();
  const signinHandler = async (e) => {
    console.log('signin')
    e.preventDefault();

    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await axios.post('/api/auth/login', { ...testCredentials });
      if (status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: encodedToken })
        );
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: foundUser }));
        setUser(foundUser);
        navigate('/homepage')
      }
    } catch (error) {
      console.log("Error in login user", error);
    }
  }
  return (
    <>
    <div className={theme==="light"?"page-container":"page-container-dark"}>
      <form className={theme==="light"?"form-container":"form-container-dark"}>
        <h5 class="sub-heading">Signin</h5>
        <div class="form-group flex-vt">
          <label for="email-input" class="form-label form-field-required">Email</label>
          <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required />
        </div>
        <div class="form-group flex-vt">
          <label htmlFor="password-input" class="form-label form-field-required">Password</label>
          <input type="password" id="password-input" class="form-control" placeholder="enter password" required />
        </div>
        <h5 class="text forgot-pw-text">Forgot Password?</h5>
        <label class="terms-condt-checkbox"> <input type="checkbox" />Remember me</label>
        <button class="btn btn-primary" onClick={signinHandler}>Submit</button>
        <Link to="/signup" class="text-link">Create new Account</Link>
      </form>
      </div>
    </>
  )
}

export default Signin