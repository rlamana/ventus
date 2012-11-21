define(function(require) {
    var $ = require('$');
    var Handlebars = require('vendor/handlebars');
    var element = require('element');

    function load(name, parentRequire, done, config) {
        $.get(name, {}, function(response, status){
            done(element(Handlebars.compile(response)));
        }, "html");
    }

    return {
        load: load,
    };
});
