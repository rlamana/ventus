define(function(require) {
    var $ = require('$');
    var Handlebars = require('vendor/handlebars');
    var View = require('core/view');

    function load(name, parentRequire, done, config) {
        if (!config.isBuild) {
            $.get(name, {}, function(response, status){
                done(View(Handlebars.compile(response)));
            }, "html");
        }
    }

    function write(pluginName, name, write) {
        write("Not yet implemented...");
    }

    return {
        load: load,
        write: write
    };
});
