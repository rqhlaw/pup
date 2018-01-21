import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './layout.states';
import './layout.scss';
import './header.scss';
import './footer.scss';

export default angular.module('rqhlaw.layout', [uiRouter])
  .config(states)
  .name;
