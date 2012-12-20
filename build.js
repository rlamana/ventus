({
	debug: false,
	
    baseUrl: 'src/js',
    
    mainConfigFile: 'src/js/config.js',
    optimizeAllPluginResources: true,

    include: ['../../vendor/almond', 'ventus'],
    //exclude: ['jquery', 'handlebars'],

    optimize: 'uglify',

    wrap: {
        startFile: "src/wrap.start",
        endFile: "src/wrap.end"
    }
})