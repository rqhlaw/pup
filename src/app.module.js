import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import appRouter from './app.states';

import layout from './modules/layout';
import home from './modules/home';

angular
  .module('rqhlaw', [
    uiRouter,
    layout,
    home
  ])
  .config(appRouter);
