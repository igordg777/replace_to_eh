const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg')


const config = {
    user: 'postgres',
    database: 'devices',
    password: 'postgres',
    port: 5432
};


const pool = new pg.Pool(config);
// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    console.log('Это работает')
    res.render('index')
})

app.get('/', function (req, res) {
    let result_str_to_save = `INSERT INTO user_access_list (username, name_guest) VALUES ('${req.query.login_tg}', '${req.query.name_guest}');`

    pool.connect(function (err, client, done) {

        if (err) {
            console.log("Can not connect to the DB" + err);
        }


        client.query(result_str_to_save, function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            console.log(result.rows);

            res.status(200).json({ respone: "Пользователm успешно сохранен" })
        })
    })
})

app.listen(3000, console.log('Server work on port 3000'));