var path = require('path')
var koa = require('koa');
var qs = require('koa-qs');
var bodyParser = require('koa-bodyparser');
var gzip = require('koa-gzip');
var staticCache = require('koa-static-cache');
var json = require('koa-json');
var router = require('./lib/router');

//
var app = koa();

// setup koa middleware
qs(app);
app.use(staticCache(path.join(__dirname, 'webapps'), {
  maxAge:24 * 60 * 60
}))
app.use(bodyParser());
app.use(gzip());
app.use(json({pretty: false}));

app.use(router.routes());
app.use(router.allowedMethods());

// start web server
app.listen(8080, function() {
  console.log('Koa is listening to http://localhost:8080');
});
