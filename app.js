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

app.get('/search', function (req, res) {
    res.render('search')
})

app.get('/users', function (req, res) {
    res.render('users')
})


app.get('/addUser', function (req, res) {
    console.log(req.query);
    console.log(req.query.login_tg);
    console.log(req.query.name_guest);

    let result_str_to_save = `INSERT INTO user_access_list (username, name_guest) VALUES ('${req.query.login_tg}', '${req.query.name_guest}');`

    console.log(result_str_to_save);

    // pool.connect(function (err, client, done) {

    //   if (err) {
    //     console.log("Can not connect to the DB" + err);
    //   }


    //   client.query(result_str_to_save, function (err, result) {
    //     done();
    //     if (err) {
    //       console.log(err);
    //       res.status(400).send(err);
    //     }
    //     console.log(result.rows);

    //     res.status(200).json({ respone: "Пользователь успешно сохранен" })
    //   })
    // })
});


app.get('/disableAccess', function (req, res) {
    console.log(req.query);
    console.log(req.query.login_tg);
    console.log(req.query.name_guest);

    let result_str_to_save = `DELETE FROM user_access_list WHERE username='${req.query.login_tg}';`

    console.log(result_str_to_save);

    // pool.connect(function (err, client, done) {

    //   if (err) {
    //     console.log("Can not connect to the DB" + err);
    //   }


    //   client.query(result_str_to_save, function (err, result) {
    //     done();
    //     if (err) {
    //       console.log(err);
    //       res.status(400).send(err);
    //     }
    //     console.log(result.rows);

    //     res.status(200).json({ respone: "Доступ для пользователя ограничен" })
    //   })
    // })
});

app.listen(3000, console.log('Server work on port 3000'));