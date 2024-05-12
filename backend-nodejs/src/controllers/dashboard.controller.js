const { Application } = require("../models");
const { status200, status500 } = require("../../constants");

const dashboardGet = async (req = request, res = response) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const [
      totalTransactions,
      business_category_simple,
      business_category_complex,
      business_category_na,
      applicationStatus_incomplete,
      applicationStatus_submitted,
      applicationStatus_aml,
    ] = await Promise.all([
      Application.count(),
      Application.count({
        where: { business_category: "Simple" },
        limit: Number(limit),
        offset: Number(offset),
      }),
      Application.count({
        where: { business_category: "complex" },
        limit: Number(limit),
        offset: Number(offset),
      }),
      Application.count({
        where: { business_category: "NA" },
        limit: Number(limit),
        offset: Number(offset),
      }),
      Application.count({
        where: { application_status: "Incomplete Application" },
        limit: Number(limit),
        offset: Number(offset),
      }),
      Application.count({
        where: { application_status: "Application Submitted" },
        limit: Number(limit),
        offset: Number(offset),
      }),
      Application.count({
        where: { application_status: "AML In-Progress" },
        limit: Number(limit),
        offset: Number(offset),
      }),
    ]);

    res.status(status200.code).json({
      totalTransactions,
      business_category: {
        simple: business_category_simple,
        complex: business_category_complex,
        na: business_category_na,
      },
      applicationStatus: {
        incomplete: applicationStatus_incomplete,
        submitted: applicationStatus_submitted,
        aml: applicationStatus_aml,
      },
    });
  } catch (error) {
    res.status(status500.code).json(status500);
  }
};

module.exports = {
  dashboardGet,
};
