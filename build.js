({
	debug: false,
	
    baseUrl: 'vendor',
    
    paths: {
        'ventus': '../src/ventus',

        'tpl': '../src/plugins/tpl',
        'less': '../src/plugins/less',
        'text': '../src/plugins/text',

        '$': 'jquery'
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