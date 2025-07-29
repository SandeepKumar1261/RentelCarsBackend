const Car = require("../models/Car");

const createCar = async (req, res) => {
  try {
    const imageLink = req.file?.path || "";

    const newCar = new Car({
      ...req.body,
      ImageLink: imageLink,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const imageLink = req.file?.path;
    const updateData = { ...req.body };
    if (imageLink) updateData.ImageLink = imageLink;

    const car = await Car.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
