/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'Если сложить все числа в игровой рулетке, получится 666.',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Если треугольник нарисовать на сфере, то сумма его углов будет 360 градусов.',
        answer: 'нет',
        deck_id: 1,
      },
      {
        question: 'В математике есть теория кос, теория узлов и теория игр.',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Ноль римскими числами не пишется.',
        answer: 'нет',
        deck_id: 1,
      },
      {
        question: 'Сумма всех чисел от 1 до 100 будет 5050.',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Слово алгебра — имеет одинаковое произношение на большинстве популярных языках мира.',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Галстук можно завязать 177147 способами.',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Город Тюмень назван в честь числа 10000.',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Памятник нулю расположен в Лондоне.',
        answer: 'нет',
        deck_id: 1,
      },
      {
        question: 'Гипотенуза — это натянутая тетива на древнегреческом языке?',
        answer: 'да',
        deck_id: 1,
      },
      {
        question: 'Кошки не чувствуют сладкого вкуса.',
        answer: 'да',
        deck_id: 2,
      },
      {
        question: 'Сердце кошки бьется быстрее человеческого.',
        answer: 'да',
        deck_id: 2,
      },
      {
        question: 'Кошка может быть с зеленной шерстью.',
        answer: 'нет',
        deck_id: 2,
      },
      {
        question: 'Кошки не умеют прыгать по снегу.',
        answer: 'нет',
        deck_id: 2,
      },
      {
        question: 'Кошки моются купаясь в лужах.',
        answer: 'нет',
        deck_id: 2,
      },
      {
        question: 'Кошки моются языком.',
        answer: 'да',
        deck_id: 2,
      },
        {
        question: 'Кошки отлично различают все цвета.',
        answer: 'нет',
        deck_id: 2,
      },
      {
        question: 'Кошки отлично видят в абсолютной темноте.',
        answer: 'нет',
        deck_id: 2,
      },
      {
        question: 'Кошка может спуститься с дерева вниз головой.',
        answer: 'нет',
        deck_id: 2,
      },
      {
        question: 'Кошки потеют только через свои подушечки лап.',
        answer: 'да',
        deck_id: 2,
      },
      {
        question: 'Все отпечатки пальцев уникальны.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'У младенцев костей больше чем у взрослых.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Женщины моргают в 4 раза чаще мужчин.',
        answer: 'нет',
        deck_id: 3,
      },
      {
        question: 'Если собрать всё железо, содержащееся в организме человека, то из него можно сделать чайную ложку.',
        answer: 'нет',
        deck_id: 3,
      },
      {
        question: 'Когда человек краснеет, его желудок  краснеет тоже.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Женское сердце бьется быстрее чем мужское.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Нервный импульс из мозга движется со скоростью более 1000 километров в час.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Ребенок до 6-ти месяце может дышать и глотать одновременно.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Нос и уши растут всю жизнь.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Чихать с открытыми глазами невозможно.',
        answer: 'да',
        deck_id: 3,
      },
      {
        question: 'Фильм Титаник, написанный, снятый и спродюссированный Джеймсом Кэмероном, стал самым кассовым фильмом своего времени.',
        answer: 'да',
        deck_id: 4,
      },
      {
        question: 'Холли Берри - первая цветная женщина, получившая премию “Оскар” за лучшую женскую роль.',
        answer: 'да',
        deck_id: 4,
      },
      {
        question: 'Медведи воспитывали Маугли в “Книге джунглей”.',
        answer: 'нет',
        deck_id: 4,
      },
      {
        question: 'Харрисон Форд сыграл детектива Рика Декарда в фильме Бегущий по лезвию 1982 года. ',
        answer: 'да',
        deck_id: 4,
      },
      {
        question: 'Таблетку синего цвета была таблетка, которую принимает Нео в фильме Матрица.',
        answer: 'нет',
        deck_id: 4,
      },
      {
        question: 'Полосатый свитер Фредди Крюгера красно-синего цвета.',
        answer: 'нет',
        deck_id: 4,
      },
      {
        question: 'Шон Коннери носил парик в каждом фильме о Джеймсе Бонде.',
        answer: 'да',
        deck_id: 4,
      },
      {
        question: 'Стаканчик Starbucks есть в каждой сцене Бойцовского клуба.',
        answer: 'да',
        deck_id: 4,
      },
      {
        question: 'Аватар - самый кассовый фильм в истории кино.',
        answer: 'да',
        deck_id: 4,
      },
      {
        question: 'У Микки Мауса пять пальцев на каждой руке.',
        answer: 'нет',
        deck_id: 4,
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
