import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './tax-planning.states';
import './tax-planning.scss';

export default angular.module('rqhlaw.taxPlanning', [uiRouter])
  .config(states)
  .name;
