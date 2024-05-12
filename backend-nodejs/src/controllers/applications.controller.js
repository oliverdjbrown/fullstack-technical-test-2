const { Application } = require("../models");
const {
  status200,
  status400,
  status500,
  alreadyCreated,
  status201,
} = require("../../constants");

const applicationGet = async (req = request, res = response) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const [total, applications] = await Promise.all([
      Application.count(),
      Application.findAll({
        limit: Number(limit),
        offset: Number(offset),
        where: {},
      }),
    ]);

    res.status(status200.code).json({
      total,
      applications,
    });
  } catch (error) {
    res.status(status500.code).json(status500);
  }
};

const applicationByIdGet = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const application = await Application.findOne({
      where: { business_application_id: id },
    });

    res.status(status200.code).json(application);
  } catch (error) {
    res.status(status500.code).json(status500);
  }
};

const applicationPost = async (req, res = response) => {
  const newApplication = req?.body;

  try {
    const application = await Application.findOne({
      where: { business_application_id: newApplication.business_application_id },
    });

    if (application) {
      return res.status(status400.code).json(alreadyCreated);
    }

    await Application.create(newApplication);

    res.status(status201.code).json(newApplication);
  } catch (error) {
    res.status(status500.code).json(status500);
  }
};

const applicationPut = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { ...data } = req.body;

    const application = await Application.update(
      {
        ...data,
      },
      {
        where: { business_application_id: id },
        returning: true,
      }
    );

    res.status(status200.code).json(application);
  } catch (error) {
    res.status(status500.code).json(status500);
  }
};

const applicationDelete = async (req, res = response) => {
  const { id } = req.params;

  if (!id) {
    res.status(status400.code).json(status400);
  }

  try {
    const application = await Application.findOne({
      where: { business_application_id: id },
    });

    if (!application) {
      res.status(status400.code).json(status400);
    }

    application.destroy();

    res.status(status200.code).json(status200);
  } catch (error) {
    res.status(status500.code).json(status500);
  }
};

module.exports = {
  applicationGet,
  applicationByIdGet,
  applicationPost,
  applicationPut,
  applicationDelete,
};
