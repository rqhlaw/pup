import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './blog.states';
import './blog.scss';

export default angular.module('rqhlaw.blog', [uiRouter])
  .config(states)
  .name;
