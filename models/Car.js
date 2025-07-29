const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  CarName: { type: String, required: true },
  Model: { type: String, required: true },
  CarType: { type: String, required: true },
  RentPerDay: { type: Number, required: true },
  Deposit: { type: Number, required: true },
  AvailabilityStatus: {
    type: String,
    enum: ["Available", "Rented"],
    required: true,
  },
  ImageLink: { type: String },
  FuelType: { type: String, required: true },
});

module.exports = mongoose.model("Car", carSchema);
