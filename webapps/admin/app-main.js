import $ from 'jquery';

var body = $('body');
body.append('<p>jQuery.version: ' + $.fn.jquery);
body.append('<p>babel.polyfill test: ' + ([1,2,3].includes(2)));
