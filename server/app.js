var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

// 设置session
app.use(cookieParser());
app.use(session({
  secret: '12345',
  name: 'expressvue',
  cookie: { maxAge: 60*60*1000 },
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var indexRouter = require('./routes');
app.use('/', indexRouter);

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));

// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});

// 监听
app.listen(3000, function () {
  console.log('success listen...3000');
});
