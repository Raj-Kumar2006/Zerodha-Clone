require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const JWT_SECRET = "zerodha_secret_key_2024";
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/allHoldings", authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({ userId: req.userId });
  res.send(allHoldings);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({ userId: req.userId });
  res.send(allPositions);
});

app.get("/allOrders", authMiddleware, async (req, res) => {
  let allOrders = await OrdersModel.find({ userId: req.userId });
  res.send(allOrders);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  let newOrder = new OrdersModel({
    userId: req.userId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Added!");
});

app.post("/seedData", authMiddleware, async (req, res) => {
  const existingHoldings = await HoldingsModel.find({ userId: req.userId });
  if (existingHoldings.length > 0) {
    return res.send("Data already exists");
  }

  const defaultHoldings = [
    { userId: req.userId, name: "ITC", qty: 100, avg: 250.5, price: 255.3, net: "+1.92%", day: "+0.41%" },
    { userId: req.userId, name: "TCS", qty: 50, avg: 3200, price: 3150, net: "-1.56%", day: "+0.12%" },
    { userId: req.userId, name: "HDFC", qty: 75, avg: 2450, price: 2520, net: "+2.86%", day: "-0.28%" },
  ];

  const defaultPositions = [
    { userId: req.userId, product: "CNC", name: "RELIANCE", qty: 10, avg: 2450.5, price: 2475.25, net: "+1.01%", day: "+0.50%", isLoss: false },
    { userId: req.userId, product: "MIS", name: "INFY", qty: 25, avg: 1450, price: 1420, net: "-2.07%", day: "-0.35%", isLoss: true },
  ];

  await HoldingsModel.insertMany(defaultHoldings);
  await PositionsModel.insertMany(defaultPositions);

  res.send("Seed data created!");
});

app.post("/signup", async (req, res) => {
  const { username, password, email, phone } = req.body;
  
  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username,
    password: hashedPassword,
    email,
    phone,
  });

  await newUser.save();
  res.json({ message: "User created successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
    expiresIn: "24h",
  });

  res.json({ token, username: user.username, userId: user._id });
});

app.listen(PORT, () => {
  console.log("Server is running on port 3002");
  mongoose.connect(url);
  console.log("Connected to MongoDB");
});