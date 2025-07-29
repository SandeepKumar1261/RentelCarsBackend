const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const carRoutes = require("./routes/car");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("🚗 Server running on port", process.env.PORT || 5000);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
