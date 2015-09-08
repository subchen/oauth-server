var fs = require('co-fs');
var koa = require('koa');
var qs = require('koa-qs');
var router = require('./lib/router');

var app = koa();

// setup koa middleware
qs(app);
app.use(router.routes());
app.use(router.allowedMethods());

// start web server
app.listen(8080, function() {
  console.log('Koa is listening to http://localhost:8080');
});
