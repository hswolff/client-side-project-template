require.config({
	paths: {
		jquery: 'vendor/jquery',
		underscore: 'vendor/underscore',
		backbone: 'vendor/backbone',
		mustache: 'vendor/mustache',
		text: 'vendor/text',
		templates: '../templates'
	}
});

require([
		'jquery',
		'underscore',
		'backbone',
		'mustache'
], function($, _, Backbone, Mustache) {

});