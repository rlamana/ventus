/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(function(require) {
    var extension = '.tpl';

    function load(name, req, done, config) {
        req(['handlebars'], function(Handlebars) {
            var templateName = name.replace(/^.*[\\\/]/, '') + extension;
            if (config.isBuild) {
                done();
                return;
            }

            if ((typeof config.debug === 'undefined') || config.debug)  {
                // In debug mode compile template on the fly
                req(['$'], function($) {
                    $.get(req.toUrl(name) + extension, {}, function(response, status){
                        done(Handlebars.compile(response));
                    }, "html");
                });
            } 
            else {
                // In release mode require the compiled template js file
                req([name + extension], function() {
                    done(Handlebars.templates[templateName]);
                });
            }
        });
    }

    return {
        load: load
    };
});
