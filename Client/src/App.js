import React, { useState, useEffect } from "react";
import Home from "./components/Home/Render file/RenderHomePage";
import AboutUs from "./components/About Us/Render file/RenderAboutUs";
import ContactUs from "./components/Contact Us/Render file/RenderContactUs";
import Markets from "./components/Markets/Render file/RenderMarket";
import Header from "./components/Header/Code/header";
import SimpleFooter from "./components/Footer/Code/footer";
import LoginForm from "./components/login sign up/login";
import SignupForm from "./components/login sign up/sign up";
import RenderingDash from "./components/dashboard/renderdash";
import UserDetails from "./components/login sign up/render_dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
import Coins from "./components/Markets/coins";
import Coin from "./components/coin/coin";

import Coin_sell from "./components/coin/coin_sell";
import BASE_URL from "./components/services/service";
export default function App() {
  const [coins, setCoins] = useState([]);

  const url = `${BASE_URL}/api/coins/markets`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const isLoggedIn = window.localStorage.getItem("token");
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/userDetails"
            element={isLoggedIn !== null ? <RenderingDash /> : <LoginForm />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Header" element={<Header />} />
          <Route exact path="/signin" element={<LoginForm />} />
          <Route exact path="/signup" element={<SignupForm />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Markets" element={<Markets />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/SimpleFooter" element={<SimpleFooter />} />
          <Route exact path="/dashboard" element={<RenderingDash />} />
          {/* <Route exact path="" element={<Dashboard/>} /> */}
          <Route exact path="/coins" element={<Coins coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
          <Route
            path="/dashboard/sell/:coinId"
            element={
              <>
                <Coin_sell />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
