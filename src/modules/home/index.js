import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './home.states';

export default angular.module('rqhlaw.home', [uiRouter])
  .config(states)
  .name;
