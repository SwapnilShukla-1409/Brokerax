import React from "react";
import "./coins.css";

const CoinItem = (props) => {
  const c = props.coins || {};
  const price = typeof c.current_price === "number" ? c.current_price : null;
  const pct = typeof c.price_change_percentage_24h === "number" ? c.price_change_percentage_24h : null;
  const totalVol = typeof c.total_volume === "number" ? c.total_volume : null;
  const marketCap = typeof c.market_cap === "number" ? c.market_cap : null;
  const rank = c.market_cap_rank != null ? c.market_cap_rank : "-";

  return (
    <div className="coin-row">
      <p>{rank}</p>
      <div className="img-symbol">
        {c.image ? <img src={c.image} alt="" /> : <div style={{ width: 24, height: 24 }} />}
        <p>{(c.symbol || "").toUpperCase()}</p>
      </div>

      <p>₹{price !== null ? price.toFixed(1) : "-"}</p>

      {pct !== null ? (
        pct < 0 ? (
          <p className="coin-percent red">{pct.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{pct.toFixed(2)}%</p>
        )
      ) : (
        <p className="coin-percent">-</p>
      )}

      <p className="hide-mobile">₹{totalVol !== null ? totalVol.toLocaleString() : "-"}</p>
      <p className="hide-mobile">₹{marketCap !== null ? marketCap.toLocaleString() : "-"}</p>
    </div>
  );
};

export default CoinItem;
