((app) => {
  'use strict'
})(require('angular').module('app', [
  require('angular-ui-router'),
  require('angular-cookies'),
  require('angular-materialize'),
  'app.config',
  'app.about',
  'app.contact'
]))
