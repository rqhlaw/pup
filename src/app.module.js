// placeholder
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import appRouter from './app.states';

import layout from './modules/layout';
import home from './modules/home';
import about from './modules/about';

angular
  .module('rqhlaw', [
    uiRouter,
    layout,
    home,
    about
  ])
  .config(appRouter);
