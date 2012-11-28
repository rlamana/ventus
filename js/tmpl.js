define(function(require) {
    var $ = require('$');
    var Handlebars = require('vendor/handlebars');
    var View = require('core/view');

    function load(name, parentRequire, done, config) {
        $.get(name, {}, function(response, status){
            done(View(Handlebars.compile(response)));
        }, "html");
    }

    return {
        load: load,
    };
});
