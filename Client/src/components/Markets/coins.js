import React from "react";
import CoinItem from "./coinitem";
import Coin from "../coin/coin.js";
import { Link } from "react-router-dom";

import './coins.css'


const Coins = (props) => {

  return (
    <div className="container4">
    
      <div>
        <Link to="/">
          <div className="coin-search">
            <h1>
              <i class="fa-solid fa-coins purple"></i> Top{" "}
              <span className="purple">Coins</span>
            </h1>
          </div>
        </Link>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
      
    </div>
  );
};

export default Coins;
