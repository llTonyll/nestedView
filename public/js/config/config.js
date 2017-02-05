((app) => {
    'use strict'
    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                    url: '/',
                    template: '<home></home>'
                })
                .state('about', {
                    url: '/about',
                    template: '<about></about>'
                })
                .state('contact', {
                    redirectTo: 'contact.phone',
                    url: '/contact',
                    template: '<contact></contact>',
                })
                .state('contact.email', {
                    url: '/contactEmail',
                    template: '<contact-email></contact-email>',
                })
                .state('contact.phone', {
                    url: '^/phone',
                    template: '<contact-phone></contact-phone>',
                });
        }
    ])
})(require('angular').module('app.config', []))
