const pool = require('../connections');
const bcrypt = require('bcrypt');



module.exports.getUser = getUser;
module.exports.createNewUser = createNewUser;