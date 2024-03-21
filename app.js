const express = require('express');
const app = express();
const path = require('path');

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    console.log('Это работает')
    res.render('index')
})

app.get('/edite', function (req, res) {
    res.render('edite')
})

app.get('/serch', function (req, res) {
    res.render('serch')
})

app.get('/users', function (req, res) {
    res.render('users')
})

app.listen(3000, console.log('Server work on port 3000'));