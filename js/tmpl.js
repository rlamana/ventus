define(function(require) {
    var $ = require('$');
    var Handlebars = require('vendor/handlebars');

    function load(name, parentRequire, done, config) {
        $.get(name, {}, function(response, status){
            done(Handlebars.compile(response))
        }, "html");
    }

    return {
        load: load,
    };
});
