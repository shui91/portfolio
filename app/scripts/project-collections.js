/* global $, Backbone */
/*eslint no-undef: 0, no-unused-vars: 0*/

'use strict';

var app = app || {};

app.projectDetails = Backbone.Model.extend({

	urlRoot: 'https://raw.githubusercontent.com/shui91/portfolio/master/dist/profile.json',

	initialize: function(attrs){
		//console.log('model init');
	},

	defaults: {
		title: 'No Title',
		dates: 'Unknown',
		caption: 'Unknown',
		description: 'Placeholder',
		url: '',
		image: '',
		alt: 'Placeholder-image'
	},

	validate: function(attrs){
		if (!attrs){
			return 'Missing Data!';
		}
	}
});

app.projectCollection = Backbone.Collection.extend({

	model: app.projectDetails,

	url: 'https://raw.githubusercontent.com/shui91/portfolio/master/dist/profile.json',

	initialize: function(){
		//console.log('collection init');
	},

	parse: function(attrs){
		return attrs.projects;
	}
});

var projects = new app.projectCollection();

app.featuredCollection = Backbone.Collection.extend({

	url: 'https://raw.githubusercontent.com/shui91/portfolio/master/dist/profile.json',

	parse: function(attrs){
		return attrs.topProjects;
	}
});

var featured = new app.featuredCollection();

