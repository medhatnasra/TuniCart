const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const UserRoutes = require("./routes/userRoutes");
const ProductRoutes = require("./routes/productRoutes");
const CartRoutes = require("./routes/cartRoutes");

app.use(express.json());

app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("WELCOME TO THERMAL CARE API");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on Port : ${process.env.PORT}`);
});

//API Routes

app.use("/api/users", UserRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));
