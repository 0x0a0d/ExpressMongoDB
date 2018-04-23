const path = require('path');
const express = require('express');

const flash = require('connect-flash');
const morgan = require('morgan');

const {bodyParser, session, passport} = require('./middleware');
const route = require('./route');

const app = express();
app.set('x-powered-by', false);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser);
// app.use(cookie);
app.use(session);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(route);


module.exports = app;