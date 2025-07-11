import React from "react";

import "./coins.css";

const CoinItem = (props) => {
  const price = props.coins.current_price;
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>₹{props.coins.current_price.toFixed(1)}</p>
      {props.coins.price_change_percentage_24h.toFixed(2) < 0 ? (
        <p className="coin-percent red">
          {props.coins.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="coin-percent green">
          {props.coins.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}
      <p className="hide-mobile">
        ₹{props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile">
        ₹{props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
