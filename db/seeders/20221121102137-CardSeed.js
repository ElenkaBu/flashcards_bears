/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'Если сложить все числа в игровой рулетке, получится 666?',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Если треугольник нарисовать на сфере, то сумма его углов будет 360 градусов?',
        answer: 'нет',
        deck_id: 1,
      },
      {
        question: 'В математике есть теория кос, теория узлов и теория игр?',
        answer: 'да',
        deck_id: 2,
      },
      {
        question: 'Ноль римскими числами не пишется?',
        answer: 'да',
        deck_id: 2,
      },
      {
        question: 'Суммой всех чисел от 1 до 100 будет 5050?',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Слово алгебра — имеет одинаковое произношение на большинстве популярных языках мира?',
        answer: 'да',
        deck_id: 3,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
