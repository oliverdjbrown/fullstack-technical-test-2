const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { status401 } = require("../../constants");

const validateJWT = async (req, res = response, next) => {
  const token = req.header("authorization")?.slice(7);  

  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    
    const user = await User.findByPk(uid);

    if (!user) return res.status(status401.code).json(status401);

    if (!user.state) return res.status(status401.code).json(status401);

    req.user = user;
    next();
  } catch (error) {
    res.status(status401.code).json(status401);
  }
};

module.exports = {
  validateJWT,
};
