const { Application } = require("../src/models");

const applicationExistById = async (searchId) => {
  const id = await Application.findOne({ where: { business_application_id: searchId } });
  if (!id) throw new Error(`The Id ${id} not exist.`);
};

module.exports = {
  applicationExistById
};
