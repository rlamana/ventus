/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(function() {

    var plugin = {
        options: {},
        load: function load(name, parentRequire, done, config) {
            var ext;

            this.options = config.css;

            if (config.isBuild || (!config.debug)) {
                done();
                return;
            }

            // Dynamically loading
            // Less can only be loaded on the browser
            /*require(['vendor/less'], function() {
                var ext = 'less';
                name = parentRequire.toUrl(name).replace(/\.[^/.]+$/, "");

                var style = document.createElement('link');
                style.setAttribute('rel', 'stylesheet/less');
                style.setAttribute('href', name + '.' + ext);

                less.sheets = [style];
                less.refresh();
                done(style);
            });*/
            done();
        },

        write: function write(pluginName, name, write) {
        }
    };

    return plugin;
});

