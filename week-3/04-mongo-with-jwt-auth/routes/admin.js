const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const userMiddleware = require("../middleware/user");
const { Admin, Course } = require("../db");
const router = Router();
const { SECRET } = require("../lib/key");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = await Admin.create({
    username,
    password,
  });
  res.status(200).json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const admin = await Admin.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (admin) {
    const token = jwt.sign(req.body, SECRET);
    return res.status(200).json({ token });
  } else {
    return res.status(404).json({ msg: "no user found" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = Course({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  });
  const courseCreated = await course.save();
  res.status(200).json({
    message: "Course created successfully",
    courseId: course._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.status(200).json({ courses });
});

module.exports = router;
