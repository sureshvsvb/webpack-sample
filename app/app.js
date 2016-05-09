import teachersController from './teachersController.js';
import studentsController from './studentsController.js';
import dataLayerService from './dataLayerService.js';
require('jquery');
import angular from 'angular';
//import 'ui-grid/ui-grid.js';
require('ui-grid/ui-grid.js');
import './styles/base.css';
require('./styles/font.less');
var app = angular.module('college.dashboard', ['ui.grid']);
app.controller('studentsController', studentsController)
   .controller('teachersController', teachersController)
   .service('dataLayerService', dataLayerService);