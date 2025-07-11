import React, { useEffect, useState } from "react";
import "./dash.css";
import axios from "axios";
import Single from "./singlediv";
import { toast } from "react-toastify/dist/react-toastify";
import Singletable from "./singletable";
import BASE_URL from "../services/service";
function RenderingArrayOfObjects(props) {
  const [currentcoins, setcurrentcoins] = useState([]);
  const [listItems, setlistItems] = useState([]);

  const getdata = () => {
    const token = localStorage.getItem("token");
    var userId = localStorage.getItem("userId");
    // console.log(userId);
    userId = userId.replace(/['"]+/g, "");
    // console.log(userId);
    fetch(`${BASE_URL}/api/user/portfolio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        let newarr = [];
        // console.log("hi");
        // setbalance(Math.round(res.data.credits))
        res = res.data.stocks;
        for (let i = 0; i < res.length; i++) {
          const url = `${BASE_URL}/api/coin/${res[i].stockId}`;

          axios
            .get(url)
            .then((resa) => {
              res[i].imagesmall = resa.data.image.small;
              res[i].current_market_price =
                resa.data.market_data.current_price.inr;
            })
            .catch((error) => {
              console.log(error);
            });
        }
        // console.log(res);
        return res;
      })
      .then((res) => {
        // showdata(res)
        setcurrentcoins(res);
      })
      .then(() => {
        return showdata(currentcoins);
      })
      .then((lists) => {
        setlistItems(lists);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };
  //   getdata();
  useEffect(() => {
    getdata();
  }, [currentcoins]);

  // const data = {currentcoins};
  // console.log(data);
  // let listItems=[];
  const showdata = (datas) => {
    let listItems1 = datas.map((element) => {
      return (
        <Single
          key={element.sto}
          stockId={element.stockId}
          imagesmall={element.imagesmall}
          total_amount={element.total_amount}
          quantity={element.quantity}
          current_market_price={element.current_market_price}
          current_cost={element.quantity * element.current_market_price}
        />
      );
    });
    return listItems1;
  };

  return <div>{listItems}</div>;
}

export default function Dash() {
  const [name, setName] = React.useState("Admin");

  const [balance, setbalance] = useState(0);
  const [investment, setinvestment] = useState(0);
  const [temp, settemp] = useState(0);
  const getdata = () => {
    const token = localStorage.getItem("token");
    var userId = localStorage.getItem("userId");
    // console.log(userId);
    userId = userId.replace(/['"]+/g, "");
    // console.log(userId);
    fetch(`${BASE_URL}/api/user/portfolio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        let newarr = [];
        // console.log("hi");
        setbalance(Math.round(res.data.credits));

        res = res.data.stocks;
        let dummy = 0;
        for (let i = 0; i < res.length; i++) {
          const url = `${BASE_URL}/api/coin/${res[i].stockId}`;

          axios
            .get(url)
            .then((resa) => {
              res[i].imagesmall = resa.data.image.small;
              res[i].current_market_price =
                resa.data.market_data.current_price.inr;
              dummy +=
                res[i].quantity * resa.data.market_data.current_price.inr;
              // console.log(dummy);
              settemp(Math.round(dummy));
            })
            .catch((error) => {
              console.log(error);
            });

          // console.log(res[i].quantity);
        }
        // setinvestment(Math.round(temp));
        // console.log(dummy);
        // setinvestment(temp)
        return temp;
      })
      .then((temp) => {
        setinvestment(temp);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };
  //   getdata();
  useEffect(() => {
    getdata();
  }, []);

  // const currentdata=(coinobj,id,index)=>{
  //   const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  //         axios.get(url).then((res) => {
  //             let dummy=coinobj;
  //             dummy.imagesmall=res.data.image.small;
  //             dummy.current_market_price=res.data.market_data.current_price.inr;

  //             console.log(dummy);
  //             return dummy;
  //             // setCoin(res.data)
  //         }).catch((error) => {
  //             console.log(error)
  //         })

  // }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
    }
    // console.log(localStorage.getItem("token"));
    const name = window.localStorage.getItem("first_name");
    // console.log(name);
    setName(name);
  }, []);

  return (
    <div id="overall">
      <input type="checkbox" id="nav-toggle" />

      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span>
              <i class="fab fa-accusoft"></i>
            </span>
            <span id="kleenpulse">Brokerax</span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li>
              <a href="#" class="active">
                <span class="fas fa-cubes"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="Markets">
                <span class="fas fa-users"></span>
                <span>Market</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fas fa-clipboard-list"></span>
                <span>Wallet</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fas fa-shopping-bag"></span>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fas fa-receipt"></span>
                <span>News Info</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fa-user-circle"></span>
                <span>Accounts</span>
              </a>
            </li>
            {/* <li>
              <a href="#">
                <span class="fas fa-clipboard"></span>
                <span>Task</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div class="main-wrapper">
        <div class="main-content">
          <header>
            <h2 className="heading" id="dashboard">
              Dashboard
            </h2>
            {/* <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label> */}
            {/* <div className="search">
              <div className="search-rotate">
                <div className="icon"></div>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="search"
                  id="mysearch"
                  autoComplete="off"
                //   onKeyDown={(e) => display(e.target)}
                />
              </div>
            </div> */}
            {/* <div className="user-wrapper">
              <img
                src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                alt=""
              />
              <div>
                <h4>LiquidTime</h4>
                <b>C E O</b>
              </div>
            </div> */}
          </header>

          <main>
            {/* <!-- <div id="pop-wrap">
                    <h1 class="pop-up">Light Mode Activated</h1>
                </div> --> */}
            {/* <div class="switch" id="switch">
              <div id="toggle">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <i class="indicator"></i>
              </div>
            </div> */}

            <div class="cards">
              <div class="card-single">
                <div>
                  <h1 id="customer"></h1>
                  <span>Happy Clients</span>
                </div>
                <div>
                  <span class="fas fa-users"></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>₹{temp}</h1>
                  <span>Current Price</span>
                  <div>
                    {((temp / (1000000 - balance)) * 100 - 100).toFixed(2) >= 0
                      ? "% Profits"
                      : "%Loss"}
                  </div>
                  <p>
                    {((temp / (1000000 - balance)) * 100 - 100).toFixed(2)}%
                  </p>
                </div>
                <div>
                  <span class="fas fa-clipboard"></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>₹{1000000 - balance}</h1>
                  <span>Total investment</span>
                </div>
                <div>
                  <span class="fas fa-shopping-bag"></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>₹{balance}</h1>
                  <span>Balance Remaining</span>
                </div>
                <div>
                  <span class="fab fa-google-wallet"></span>
                </div>
              </div>
            </div>
            <div class="recent-grid">
              <div class="projects">
                <div class="card">
                  <div class="card-header">
                    <h2 class="heading">Recent Coins</h2>

                    <button>
                      See all <span class="fas fa-arrow-right"></span>
                    </button>
                  </div>
                  <RenderingArrayOfObjects />
                </div>
              </div>
            </div>
          </main>
          {/* <div class="footer">
            <div class="word">
              <p>
                Made with{" "}
                <span id="hrt">
                  <i class="far fa-heart"></i>
                </span>{" "}
                | PULSE 2022
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <video
        class="video-1"
        src="https://res.cloudinary.com/liquidtime/video/upload/v1655385934/abstract_fihenv.mp4"
        loop
        muted
        autoplay
      ></video>
      <video
        class="video-2"
        src="https://res.cloudinary.com/liquidtime/video/upload/v1655385877/dark_wave_irg2pp.mp4"
        loop
        muted
        autoplay
      ></video>
      {/* </input> */}
    </div>
  );
}
