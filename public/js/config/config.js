((app)=>{
  'use strict'
  app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
   function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('about', {
            	  url: '/about',
                component: 'about'
            })
            .state('contact', {
                redirectTo: 'contact.phone',
                url: '/contact',
                component: 'contact'
            });










        }])
})(require('angular').module('app.config', []))
