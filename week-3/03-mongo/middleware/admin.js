const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.header("username");
  const password = req.header("password");
  const adminExists = await Admin.findOne({
    username,
    password,
  });

  adminExists ? next() : res.status(401).json({ msg: "unauthorised" });
}

module.exports = adminMiddleware;
