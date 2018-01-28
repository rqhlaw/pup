import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './home.states';
import './home.scss';

export default angular.module('rqhlaw.home', [uiRouter])
  .config(states)
  .name;
