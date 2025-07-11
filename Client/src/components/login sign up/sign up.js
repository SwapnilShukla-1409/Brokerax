import React, { Component, useState } from "react";
import "./login.css";
import { toast } from "react-toastify/dist/react-toastify";
// import './page-specific-styles.css';
import BASE_URL from "../services/service";
function SignupForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fname, lname, email, password);
    fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        // Add parameters here
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          data = data.data;
          localStorage.setItem("token", data.token);
          window.localStorage.setItem("userId", JSON.stringify(data.userId));
          window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("first_name", data.first_name);
          window.localStorage.setItem("last_name", data.last_name);
          toast.success("Signup Successfull");
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
        } else {
          toast.error(data.data.message);
          console.log(data.data.message);
        }
        // window.location.href = "/dashboard";
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
        toast(err.message);
        setTimeout(() => {
          window.location.href = "/signup";
        }, 2000);
      });
  };
  return (
    <div id="container">
      <header>Become a Member</header>
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            value={fname}
            required
            autoFocus
          />
          <br />
          <br />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="last-name"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            required
          />
          <br />
         
          <label htmlFor="submit"></label>
          <input type="submit" name="submit" id="submit" value="REGISTER"/>     

        <br/>
       
       

        </fieldset>
      
      </form>
      <div className="haveaccount">
         <p id="acc"  >Already have an account? 
          <a href="/signin">
          <button id="naya">Login</button>
          </a>
          </p>
         </div>
    </div>
  );
}

export default SignupForm;
