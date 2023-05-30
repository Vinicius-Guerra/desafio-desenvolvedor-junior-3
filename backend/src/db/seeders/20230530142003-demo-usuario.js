'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'Flavia Cristina',
        username: 'cris123',
        password: 'tina123',
        email: 'tinagg@gmail.com',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Julia Sobral',
        username: 'julialogin',
        password: 'jusenha',
        email: 'juliasobral@gmail.com',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Antonio',
        username: 'marcoslogin',
        password: 'marcos123',
        email: 'marcos@marcos.com',
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
