const { Decipher } = require("crypto");
const { Admin } = require("../db");
const { SECRET } = require("../lib/key");
const jwt = require("jsonwebtoken");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.header("Authorization").replace("Bearer ", "");
  const decode = jwt.verify(token, SECRET);

  const username = decode.username;
  const password = decode.password;
  const adminExists = await Admin.findOne({ username, password });
  adminExists ? next() : res.status(401).json({ msg: "unauthorised" });
}

module.exports = adminMiddleware;
