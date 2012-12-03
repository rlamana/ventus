define(function() {

    var compile = function(name, callback) {
        require(['vendor/less'], function() {
            var style = document.createElement('link');
            style.setAttribute('rel', 'stylesheet/less');
            style.setAttribute('href', require.toUrl(name));

            less.sheets = [style];
            less.refresh();
            
            if(callback)
                callback.apply();
        });
    };

    var plugin = {
        load: function load(name, parentRequire, done, config) {
            // Dynamically loading
            if (!config.isBuild) {
                compile.call(this, name, done);
                return;
            }
            done();
        },

        write: function write(pluginName, name, write) {
            write('(' + compile.toString() + ')("'+name+'");');
        }
    };

    return plugin;
});
