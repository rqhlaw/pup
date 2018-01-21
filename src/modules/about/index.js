import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './about.states';

export default angular.module('rqhlaw.about', [uiRouter])
  .config(states)
  .name;
