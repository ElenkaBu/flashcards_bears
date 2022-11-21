require('dotenv').config();
require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

homeRout = require('./routs/routs.home');

// импорт роутов
app.use('/home', homeRout);

//ф-ии контроллеров
const { criticalErr, notFoundPage } = require('./controllers/errors');

// делаем доступной папку public с фронта
app.use(express.static(path.resolve('public')));

// логгер запросов (режим dev)
app.use(morgan('dev'));

// парсинг json обьектов
app.use(express.json()); //- это метод, встроенный в express для распознавания входящего объекта запроса как объекта JSON
app.use(express.urlencoded({ extended: true })); // - это метод для распознавания входящего объекта запроса в виде строк или массивов.

// сюда запрос дойдет, если не сработает ни один роут
app.use(notFoundPage);
app.use(criticalErr);



app.listen(PORT, () => {
  console.log(`Server starting on http://localhost:${PORT}`);
});
