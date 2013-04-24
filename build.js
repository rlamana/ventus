({
	debug: false,

    baseUrl: 'vendor',

    paths: {
        'ventus': '../src/ventus',

        'tpl': '../src/plugins/tpl',
        'less': '../src/plugins/less',
        'text': '../src/plugins/text',

        '$': 'jquery',
        'Underscore': '../vendor/underscore'
    },

    shim: {
        'Underscore': {
            exports: '_'
        }
    },

    optimizeAllPluginResources: true,

    include: ['almond', 'ventus'],
    exclude: ['$', 'handlebars'],

    optimize: 'uglify',

    wrap: {
        startFile: "src/wrap.start",
        endFile: "src/wrap.end"
    }
})