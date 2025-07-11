import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { toast } from "react-toastify/dist/react-toastify";
import "./coin.css";
import BASE_URL from "../services/service";
const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [value, setValue] = useState();

  const url = `${BASE_URL}/api/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuy = (e) => {
    e.preventDefault();

    if (!value) {
      toast.error("Please Enter Amount");
      console.log("Please Enter Amount");
      return;
    }
    if (!coin) {
      toast.error("Please Try Again Later");
      return;
    }

    const userId = localStorage.getItem("userId");
    console.log(userId);
    fetch(`${BASE_URL}/api/user/stock/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        userId: userId,
        stockId: coin.id,
        quantity:
          value /
          ((coin.market_data &&
            coin.market_data.current_price &&
            coin.market_data.current_price.inr) ||
            1),
        current_price: value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.success) {
          toast.success("Stock Bought Successfully");
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
        } else {
          console.log("error hai bhai");
          toast.error(
            "Error occurred while buying stock" || response.data.message
          );
        }
      });
  };

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
          <div className="btn-store">
            <h2>Amount:</h2>
            <div className="buy-amount">
              <form>
                <input
                  type="number"
                  placeholder="Stock"
                  min="1"
                  max="2000"
                  step="50"
                  defaultValue="0"
                  onChange={(e) => setValue(e.target.value)}
                />
                <input
                  className="btn-buy"
                  type="submit"
                  value="Buy"
                  style={{ border: "1px green" }}
                  onClick={handleBuy}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image && <img src={coin.image.small} alt="" />}
              <p>{coin.name}</p>
              {coin.symbol && <p>{coin.symbol.toUpperCase()}/INR</p>}
            </div>
            <div className="coin-price">
              {coin.market_data && coin.market_data.current_price && (
                <h1>
                  Rs{" "}
                  {coin.market_data.current_price.inr
                    .toFixed(1)
                    .toLocaleString()}
                </h1>
              )}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data &&
                    coin.market_data.price_change_percentage_1h_in_currency && (
                      <p>
                        {coin.market_data.price_change_percentage_1h_in_currency.inr.toFixed(
                          1
                        )}
                        %
                      </p>
                    )}
                </td>

                <td>
                  {coin.market_data &&
                    coin.market_data
                      .price_change_percentage_24h_in_currency && (
                      <p>
                        {coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(
                          1
                        )}
                        %
                      </p>
                    )}
                </td>

                <td>
                  {coin.market_data &&
                    coin.market_data.price_change_percentage_7d_in_currency && (
                      <p>
                        {coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(
                          1
                        )}
                        %
                      </p>
                    )}
                </td>
                <td>
                  {coin.market_data &&
                    coin.market_data
                      .price_change_percentage_14d_in_currency && (
                      <p>
                        {coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(
                          1
                        )}
                        %
                      </p>
                    )}
                </td>
                <td>
                  {coin.market_data &&
                    coin.market_data
                      .price_change_percentage_30d_in_currency && (
                      <p>
                        {coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(
                          1
                        )}
                        %
                      </p>
                    )}
                </td>
                <td>
                  {coin.market_data &&
                    coin.market_data.price_change_percentage_1y_in_currency && (
                      <p>
                        {coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(
                          1
                        )}
                        %
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data && coin.market_data.low_24h && (
                  <p>Rs {coin.market_data.low_24h.inr.toLocaleString()}</p>
                )}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data && coin.market_data.high_24h && (
                  <p>
                    Rs{" "}
                    {coin.market_data.high_24h.inr.toFixed(1).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data && coin.market_data.market_cap && (
                  <p>Rs {coin.market_data.market_cap.inr.toLocaleString()}</p>
                )}
              </div>
              <div className="row">
                <h4>Total Volume</h4>
                {coin.market_data && coin.market_data.total_volume && (
                  <p>Rs {coin.market_data.total_volume.inr.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>About {coin.name}</h2>
          {coin.description &&
            coin.description.en &&
            DOMPurify.sanitize(coin.description.en)}
        </div>
      </div>
    </div>
  );
};

export default Coin;
