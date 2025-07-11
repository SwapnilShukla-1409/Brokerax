const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const dotenv = require("dotenv");
const authRouter = require("./routers/authrouter");
const userDataRouter = require("./routers/userdatarouter");
const coinGeckorouter=require("./routers/coinGeckorouter");
const bodyParser = require("body-parser");
const flash = require("connect-flash");

dotenv.config();
const PORT = process.env.PORT || 4000;
const MongoUri = process.env.MONGODB_URI;

mongoose
  .connect(MongoUri, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is listening on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Error Occurred");
  });

app.use(cors());


app.use(flash());
app.get("/api", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/user", userDataRouter);
app.use("/api/",coinGeckorouter);
