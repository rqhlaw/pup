import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './probate.states';
import './probate.scss';

export default angular.module('rqhlaw.probate', [uiRouter])
  .config(states)
  .name;
