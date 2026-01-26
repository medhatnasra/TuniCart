const express = require("express");

const Product = require("../models/Product");

const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/products
// @desc get all products
// @Access Private/Admin

router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      res.status(404).json({ message: "Products Not Found" });
    }
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
