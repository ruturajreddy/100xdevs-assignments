const { User } = require("../db");
const { SECRET } = require("../lib/key");
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.header("Authorization").replace("Bearer ", "");
  const decode = jwt.verify(token, SECRET);
  username = decode.username;
  password = decode.password;
  const userExists = await User.findOne({ username, password });
  userExists ? next() : res.status(401).json({ msg: "unauthorised" });
}

module.exports = userMiddleware;
