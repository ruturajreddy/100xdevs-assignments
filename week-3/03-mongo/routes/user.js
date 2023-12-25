const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const admin = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.status(200).json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.status(200).send(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { username, password } = req.headers;

  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json({ msg: "course not found" });
  }

  await User.findOneAndUpdate(
    { username, password },
    { $push: { purchasedCourses: course } },
    { new: true } // Return the updated user document
  );

  res.status(200).json({ msg: "course purchased" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username, password } = req.headers;
  const user = await User.findOne({ username, password }).populate(
    "purchasedCourses"
  );

  const purchasedCourses = user.purchasedCourses;
  res.status(200).json({ purchasedCourses });
});

module.exports = router;
