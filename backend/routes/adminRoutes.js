const express = require("express");
const User = require("../models/User");

const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();
const bcrypt = require("bcryptjs");

// @route GET /api/admin/users
// @desc get all users
// @Access Private/admin

router.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(404).json({ message: "Users Not Found" });
    }

    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route GET /api/admin/users
// @desc Add new user (admin only)
// @Access Private/admin

router.post("/users", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    const salt = bcrypt.genSaltSync(10);

    const hash = await bcrypt.hash(password, salt);
    const CreatedUser = await User.create({
      name,
      email,
      password: hash,
      role,
    });

    res
      .status(201)
      .json({ message: "User Created Successfully", userDetails: CreatedUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route PUT /api/admin/users/id
// @desc Update User information
// @Access Private/admin

router.put("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;

      const updatedUser = await user.save();
      res
        .status(200)
        .json({ message: "Updated Successfully", userDetails: updatedUser });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route DELETE /api/admin/users/id
// @desc Delete user
// @Access Private/admin

router.delete("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.deleteOne();
      res
        .status(200)
        .json({ message: "User Deleted Successfully", _id: req.params.id });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
