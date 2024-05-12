const dbValidators = require('./db-validators');
const generateJTW = require('./generate-JWT');
const hashPassword = require('./hash-password');

module.exports = {
    ...dbValidators,
    ...generateJTW,    
    ...hashPassword    
}