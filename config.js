({
    mainConfigFile: 'src/js/ventus.js',
    optimizeAllPluginResources: true,

  	// How to optimize all the JS files in the build output directory.
    // Right now only the following values
    // are supported:
    // - "uglify": (default) uses UglifyJS to minify the code.
    // - "closure": uses Google's Closure Compiler in simple optimization
    // mode to minify the code. Only available if running the optimizer using
    // Java.
    // - "closure.keepLines": Same as closure option, but keeps line returns
    // in the minified files.
    // - "none": no minification will be done.
    optimize: 'uglify'
})