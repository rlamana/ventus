/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(function(require) {
    var extension = '.handlebars';

    function load(name, req, load, config) {
        if (!config.isBuild) {
            req(['$', 'templates'], function($, Handlebars) {
                $.get(req.toUrl(name) + extension, {}, function(response, status){
                    load(Handlebars.compile(response));
                }, "html");
            });
        } 
        else {
            // In build mode require the compiled template js file
            req([name + extension], function(template) {
                load(template);
            });
        }
    }

    /*
    function write(pluginName, name, write) {
        write("Not yet implemented...");
    }*/

    return {
        load: load/*,
        write: write*/
    };
});
