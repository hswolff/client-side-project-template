/* Install Optimization tool:.

	Full Explination:
		http://requirejs.org/docs/optimization.html#download
	
	Quickstart:
		npm install -g requirejs
		r.js -o app.build.js

	Full documentation: https://github.com/jrburke/r.js/blob/master/build/example.build.js

    Note:  need to copy over compiled javascript into folder for it to work atm
*/

({

    appDir: './public/',
    baseUrl: 'js',
    dir: './public-build',

    // mainConfigFile: './js/main.js',

    paths: {
      jquery: 'vendor/jquery',
      underscore: 'vendor/underscore',
      backbone: 'vendor/backbone',
      mustache: 'vendor/mustache',
      text: 'vendor/text',
      templates: '../templates'
    },

    optimize: 'none',

    modules: [
        { name: 'main' }
        // { name: 'pages', exclude: ['main'] },
    ]
    
})