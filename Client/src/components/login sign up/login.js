import React, { Component, useState } from "react";
import "./login.css";
import BASE_URL from "../services/service";
import { toast } from "react-toastify/dist/react-toastify";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
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
        data = data.data;
        localStorage.setItem("token", data.token);
        window.localStorage.setItem("userId", JSON.stringify(data.userId));
        window.localStorage.setItem("email", data.email);
        window.localStorage.setItem("first_name", data.first_name);
        window.localStorage.setItem("last_name", data.last_name);
        toast.success("Login Successfull");
        localStorage.setItem("loggedIn",true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);

        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Something Went Wrong");
      });
  }
  return (
    <div id="container">
      <header>Become a Member</header>
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
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
          <br />
          <br />
          <br />
          <label htmlFor="submit"></label>
          <input type="submit" name="submit" id="submit" value="LOGIN" />
        </fieldset>
      </form>
    <br/>
    <br/>
      <div className="haveaccount">
         <p id="acc"  >Don't have an account? 
          <a href="/signup">
          <button id="naya">Signup</button>
          </a>
          </p>
         </div>
    </div>
  );
}
export default LoginForm;
