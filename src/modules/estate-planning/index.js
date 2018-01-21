import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './estate-planning.states';
import './estate-planning.scss';

export default angular.module('rqhlaw.estatePlanning', [uiRouter])
  .config(states)
  .name;
