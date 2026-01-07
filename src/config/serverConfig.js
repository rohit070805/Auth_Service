const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
module.exports={
    PORT : process.env.PORT,
    SALT : bcrypt.genSaltSync(10),
    JWTKEY: process.env.JWTKEY,
    DB_SYNC:process.env.DB_SYNC
};