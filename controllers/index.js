const authControllers = require('./authControllers');
const userControllers= require('./userControllers')
const kategorimapelControllers= require('./kategorimapelControllers')
module.exports = {
    auth: authControllers,
    user: userControllers,
    kategorimapel: kategorimapelControllers,
};