System.config({
    baseURL: '/subchen/nodejs/oauth-server/webapps/admin/',
    transpiler: 'babel',
    babelOptions: {
        'optional': [
            'runtime',
            'optimisation.modules.system'
        ]
    },
    map: {
        'babel': 'node_modules/babel-core/browser.min.js',
        'babel-runtime': 'node_modules/babel-core/browser-polyfill.min.js'
    },
    meta: {
        'babel': {
            deps: ['babel-runtime']
        },
        'babel-runtime': {
            format: 'global'
        }
    }
});

System.shims = function (shims) {
    Object.keys(shims).forEach(function (name) {
        System.set(name, System.newModule({
            'default': shims[name]
        }));
    });
};

System.shims({
    'window': window,
    'document': window.document,
    'jquery': window.jQuery,
    'angular': window.angular,
    'lodash': window._
});

System.import('app-main.js');
