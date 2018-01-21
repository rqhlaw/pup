import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './trust-admin.states';
import './trust-admin.scss';

export default angular.module('rqhlaw.trustAdmin', [uiRouter])
  .config(states)
  .name;
