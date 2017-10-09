var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var users = require('./routes/users')

var app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index)
// app.use('/users', users)

// 托管静态文件
app.use('/static', express.static('public'))


// 监听端口
app.listen(3000, function () {
  console.log('Open successfully!')
})

// 连接数据库
var mongoose = require('mongoose')
var url = 'mongodb://localhost/firstblog'
mongoose.connect(url, { useMongoClient: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('MongoDB connection~')
})
// 定义一个schema
var ArticleSchema = new mongoose.Schema({
      index: Number,
      title: String,
      summary: String,
      content: String,
      commentsName: [String],
      commentsBody: [String]
    })
// 将该Schema发布为Model
var ArticleModel = db.model('article', ArticleSchema)

// 注册页面传递数据
app.get('/articledata', function (req, res) {
  console.log('in')
  ArticleModel.find(function (err, article) {
    if (err) {
      console.log(err)
    } else {
      res.json({result: article})
    }
  })
})



// 用Model创建Entity并存储
// var ArticleEntity = new ArticleModel()
// ArticleEntity.save()

// 输出数据库的数据数量
ArticleModel.find(function (err, article) {
  if (err) {
    console.log(err)
  } else {
    console.log(article.length)
  }
})



// 不使用也可以打开主页
app.get('/*', function(req, res, next) {
    // 使用默认参数，除了根路径要改变
    var options = {
        root: './public/',
        dotfile: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    // 由于拿到的数据是个数组（前面用了*匹配），从index.html开始，所以filename取第一个
    var fileName = req.params[0]
    // 通过sendFile()函数取到主页面的内容并展现出来
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end()
        }
        else {
            console.log('sent', fileName)
        }
    })
})