define(function(require) {
    require('vendor/less');
    less.env = 'development';

    function load(name, parentRequire, done, config) {
        var style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet' + ((config.css && config.css.less) || true ? '/less' : ''));
        style.setAttribute('href', parentRequire.toUrl(name));

        less.sheets = [style];
        less.refresh();
        done(style);
    }

    return {
        load: load,
    };
});
