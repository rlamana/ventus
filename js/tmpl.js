define(function(require) {
    var $ = require('$');
    var Handlebars = require('vendor/handlebars');
    var dom = require('dom');

    function load(name, parentRequire, done, config) {
        $.get(name, {}, function(response, status){
            done(dom(Handlebars.compile(response)));
        }, "html");
    }

    return {
        load: load,
    };
});
