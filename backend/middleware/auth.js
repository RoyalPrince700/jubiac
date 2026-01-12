const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign(
    { _id: userId },
    process.env.TOKEN_SECRET_KEY,
    { expiresIn: "8h" }
  );
};

module.exports = { generateToken };

