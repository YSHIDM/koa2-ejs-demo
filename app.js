//app.js  
//supervisor app.js 自动重启服务器
var express = require('express');
// var path =require('path');
var _ = require('underscore');
// var mongoose=require('mongoose');
// var Movie=require('./models/mongodb');
var port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var app = express();


app.set('views', './view');
app.set("view cache", true);
app.set('view engine', 'ejs');

app.use(bodyParser.json());// 格式化表单提交
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public', {
    maxAge: '0',//no cache
    etag: true
}));
app.locals.moment = require('moment');
app.listen(port);

console.log('server start on port' + port);

app.get("/", function (req, res) {//index页面
    res.render('layout', { title: '我的首页', pagename: "index", name: 'ys' });//传入参数index，表示在模板页面引入index.ejs文件
});
app.get("/login", function (req, res) {//login页面
    res.render('layout', { title: '登录页面', pagename: "login", name: 'yy' });//传入参数login，表示在模板页面引入login.ejs文件
});
app.get("/test", function (req, res) {//index页面
    res.render('page/haha', {  name: 'ys' });//传入参数index，表示在模板页面引入index.ejs文件
});