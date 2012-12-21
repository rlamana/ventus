({
	debug: false,
	
    baseUrl: 'vendor',
    
    paths: {
        'ventus': '../ventus',

        'tpl': '../ventus/plugins/tpl',
        'less': '../ventus/plugins/less',
        'text': '../ventus/plugins/text',

        '$': 'jquery'
    },

    /*mainConfigFile: 'src/js/config.js',*/
    optimizeAllPluginResources: true,

    include: ['almond', 'ventus'],
    exclude: ['$', 'handlebars'],

    optimize: 'uglify',

    wrap: {
        startFile: "ventus/wrap.start",
        endFile: "ventus/wrap.end"
    }
})