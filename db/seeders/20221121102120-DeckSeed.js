'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Decks', [
      {
        title: 'Математика',
      },
      {
        title: 'Кошки',
      },
      {
        title: 'Анатомия',
      },
      {
        title: 'Кино',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Decks', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
