require('dotenv').config();

const express = require('express');
const app = express();
const porta = process.env.PORT;
const path = require('path');

const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION;
mongoose.connect(connectionString)
    .then(() => {
        console.log('Conectei na base de dados');
        app.emit('pronto');
    })
    .catch((err) => console.log(err));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// const hemlet = require("helmet")
// app.use(hemlet())

const csrf = require("csurf")

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'chaveSecreta',
    store: MongoStore.create({ mongoUrl: connectionString }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
});
app.use(sessionOptions);
app.use(flash());

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const router = require('./router/routes');

app.use(csrf())
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(router);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('pronto', () => {
    app.listen(porta, () => {
        console.log('Servidor rodando...');
        console.log(`http://localhost:${porta}`);
    });
});
