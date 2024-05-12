const fetch = require("node-fetch");
const https = require("https");
const { User, Application } = require("../models");

const {
  status200,
  status400,
} = require("../../constants");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const seedsGet = async (req = request, res = response) => {
  const seedURl = process.env.SEED_URL;
  try {
    const response = await fetch(seedURl, {
      agent: httpsAgent,
    });

    const data = await response.json();

    await Application.destroy({
      where: {},
      truncate: true,
    });

    await User.findOrCreate({
      where: { email: "correo1@correo.com.do"},
      defaults: {
        email: "correo1@correo.com.do",
        password: "$2a$10$j.P/8U0lZq1Q8HZagjZVr.GyM0V00it5qrf5EXkZ55j7zHgDlC6YG",
        name: "User Name",
        state: true,
        rol: "admin",
      }
    });

    const applications = await Application.bulkCreate(data);

    res.status(status200.code).json({
      message: "Seeds created successfully",
      data: applications,
    });
  } catch (error) {
    res.status(status400.code).json({ error: error });
  }
};

module.exports = {
  seedsGet,
};
