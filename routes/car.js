const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../utils/cloudinary");
const upload = multer({ storage });

const {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

// Routes
router.post("/", upload.single("image"), createCar);
router.get("/", getAllCars);
router.get("/:id", getCarById);
router.put("/:id", upload.single("image"), updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
