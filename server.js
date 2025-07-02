const express = require("express");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

// app config
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/payment', require('./routes/paymentRouter'));
// connect to db
connectDB();

// static files for uploaded images
app.use("/images", express.static("uploads"));

// routes
app.use('/api/food', require('./routes/foodRouter'));
app.use('/api/user', require('./routes/userRouter'));
app.use('/api/cart', require('./routes/cartRouter'));
app.use('/api/order', require('./routes/orderRouter'));

// test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
