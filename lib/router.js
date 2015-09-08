var Router = require('koa-router');
var router = new Router();

/**
 * 1. /authorize?response_type=code, /token?response_type=authorization_code
 * 2. /authorize?response_type=token
 * 3. /token?response_type=password
 * 4. /token?response_type=client_credentials
 */

router.get('/authorize', function *(next) {
    var query = this.query;
    var client = clients.get(query.client_id);
    if (client == null) {
        throw new Error('client_id not found');
    }

    if (!client.authorizeType.contains(query.response_type)) {
        throw new Error('response_type not support for client');
    }

    if (query.redirect_uri.startsWith('http')) {
        throw new Error('redirect_uri must be http/https url');
    }

    this.body = 'to login';
});

router.post('/authorize', function *(next) {
    var approved = true;
    if (approved) {

    } else {

    }

    switch (query.response_type) {
        case 'code':

            break;
        case 'token':
            break;
        default:
            throw new Error('invalid response_type');
    }


    var code = 'aaaa';

    var url = [query.redirect_uri];
    url.push(query.redirect_uri.indexOf('?') === -1 ? '?' : '&');
    url.push('code=', code);
    if (query.state !== undefined) {
        url.push('&state=', encodeURIComponent(query.state));
    }

    this.redirect(url);
});

router.post('/token', function *(next) {
    var query = this.query;

    switch (query.response_type) {
        case 'authorization_code':
            break;
        case 'password':
            break;
        case 'client_credentials':
            break;
        case 'refresh_token':
            break;
        default:
            throw new Error('invalid grant_type');
    }

    this.body = {
        access_token: '2YotnFZFEjr1zCsicMWpAA',
        token_type: 'example',
        expires_in: 3600,
        refresh_token: 'tGzv3JOkF0XG5Qx2TlKWIA'
    };
});

module.exports = router;
