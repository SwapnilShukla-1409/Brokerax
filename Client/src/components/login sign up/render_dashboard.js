import React, { Component, useEffect, useState } from "react";
import BASE_URL from "../services/service";
import Dash from "../dashboard/dash";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    fetch(`${BASE_URL}/userData`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");

        setUserData(data.data);

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);

  return <Dash userData={userData} />;
}
