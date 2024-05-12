const auth = require("./auth.controller");
const application = require("./applications.controller");
const dashboard = require("./dashboard.controller");
const seeds = require("./seeds.controller");

module.exports = {
    ...auth,
    ...application,
    ...dashboard,
    ...seeds
}