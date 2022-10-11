/*------<INTIATE TOKEN>------*/
const jwt = require("jsonwebtoken");
/*------<METHOD TOKEN>------*/
exports.createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECURE_PK, {
        expiresIn: process.env.JWT_EXPIRE,
      });
};
