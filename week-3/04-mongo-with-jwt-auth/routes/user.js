const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { SECRET } = require("../lib/key");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  const user = await User.create({
    username,
    password,
  });
  res.status(200).json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(req.body, SECRET);
    res.status(200).json({ token });
  } else {
    res.status(404).json({ msg: "no user found" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.status(200).json({ courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const token = req.header("Authorization").replace("Bearer ", "");
  const decode = jwt.verify(token, SECRET);

  const username = decode.username;
  const password = decode.password;

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
  const token = req.header("Authorization").replace("Bearer ", "");
  const decode = jwt.decode(token);

  const username = decode.username;
  const password = decode.password;

  const user = await User.findOne({ username, password }).populate(
    "purchasedCourses"
  );

  const purchasedCourses = user.purchasedCourses;
  res.status(200).json({ purchasedCourses });
});

module.exports = router;
