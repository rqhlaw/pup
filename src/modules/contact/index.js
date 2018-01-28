import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './contact.states';
import './contact.scss';

export default angular.module('rqhlaw.contact', [uiRouter])
  .config(states)
  .name;
