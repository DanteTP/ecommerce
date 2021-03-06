var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const session = require('express-session');
var cookieParser = require('cookie-parser')


var indexRouter = require('./routes/index');
var usersRouter = require(path.join(__dirname,'./routes/users'));
var productRouter = require(path.join(__dirname,'./routes/product'));
var apiproductRouter = require(path.join(__dirname,'./routes/API/productapi'));
var apiuserRouter = require(path.join(__dirname,'./routes/API/userapi'));


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());


app.use(
  session({
    secret: "mi frase secreta",
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/productapi', apiproductRouter)
app.use('/userapi', apiuserRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
