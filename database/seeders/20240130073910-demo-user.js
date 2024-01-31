// 'use strict';
const bcrypt = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   users = [];
   let salt = bcrypt.genSaltSync(10);
   users.push({
    name:'admin',
    role:'admin',
    email: 'admin@gmail.com',  
    password: bcrypt.hashSync("rahasia", salt),
    createdAt: new Date(),
    updatedAt: new Date()
   });
   users.push({
    name: 'member Project',
    role: 'member',
    email: 'member@gmail.com',
    password: bcrypt.hashSync("rahasia", salt),
    createdAt:new Date(),
    updatedAt: new Date()
   });
   return queryInterface.bulkInsert('Users',users,{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users',null, {});
  }
};
