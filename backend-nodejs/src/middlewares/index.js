const validateJWT = require("./validate-jwt.middleware");
const validateRoles = require("./validate-roles.middleware");
const validateFields = require("./validate-fields.middleware");

module.exports = {
    ...validateFields,
    ...validateRoles,
    ...validateJWT    
}