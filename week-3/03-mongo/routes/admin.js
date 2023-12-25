const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = await Admin.create({
    username: username,
    password: password,
  });
  res.status(200).json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;

  // Assuming Course model has fields: title, description, price, imageLink
  const course = Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  const courseCreated = await course.save();
  res.status(200).json({
    message: "Course created successfully",
    courseId: courseCreated._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.status(200).json({ courses });
});

module.exports = router;
