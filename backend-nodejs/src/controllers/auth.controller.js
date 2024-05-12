const { response } = require("express");
const { comparePassword } = require("../../helpers");
const { generateJWT } = require("../../helpers");

const { User } = require("../models");

const {  
  status200,  
  status400,
  invalidUserOrPassword
} = require("../../constants");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email }});

    if (!user) return res.status(status400.code).json(invalidUserOrPassword);

    if (!user.state) return res.status(status400.code).json(invalidUserOrPassword);

    if (!comparePassword(password, user.password)) {
      return res.status(status400.code).json(invalidUserOrPassword);
    }

    const token = await generateJWT(user.id.toString());

    const userData = {...user.dataValues};

    delete userData.password;

    res.status(status200.code).json({
      user: userData,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("");
  }
};

const renewJWT = async (req, res = response) => {
  const { user } = req;
  const token = await generateJWT(user?.id);
  res.status(200).json({
    user,
    token,
  });
};

module.exports = {
  login,
  renewJWT
};
