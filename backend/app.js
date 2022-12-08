var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
require('dotenv').config();
var fileUpload = require('express-fileupload');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var logOutRouter = require('./routes/admin/logout');
var dashboardRouter = require('./routes/admin/dashboard');
var apiRouter = require('./routes/api');

var pool = require('./model/db');
var app = express();

app.use(session({
  secret: 'IVcAgx5uQqR7x0g9a9W0',
  resave: false,
  saveUninitialized: true,
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

secured = async (req, res, next) => {
  try {
    if (req.session.active) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/logout', logOutRouter);
app.use('/admin', secured, dashboardRouter);
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
