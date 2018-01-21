import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import appRouter from './app.states';

import layout from './modules/layout';
import home from './modules/home';
import contact from './modules/contact';
import estatePlanning from './modules/estate-planning';
import probate from './modules/probate';

angular
  .module('rqhlaw', [
    uiRouter,
    layout,
    home,
    estatePlanning,
    probate,
    contact
  ])
  .config(appRouter);
