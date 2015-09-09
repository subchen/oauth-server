System.config({
    baseURL: '/subchen/nodejs/oauth-server/webapps/admin/',
    defaultJSExtensions: true,
    transpiler: 'babel',
    babelOptions: {
        'optional': [
            'runtime',
            'optimisation.modules.system'
        ]
    },
    map: {
        'babel': 'node_modules/babel-core/browser.min.js'
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
    jquery: window.jQuery,
    angular: window.angular,
    lodash: window._
});

System.import('app-main.js');
