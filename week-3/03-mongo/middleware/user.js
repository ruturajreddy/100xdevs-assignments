const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.header("username");
  const password = req.header("password");
  const userExists = await User.findOne({
    username,
    password,
  });

  userExists ? next() : res.status(401).json({ msg: "unauthorised" });
}

module.exports = userMiddleware;
