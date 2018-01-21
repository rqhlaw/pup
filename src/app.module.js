import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import appRouter from './app.states';

import layout from './modules/layout';
import contact from './modules/contact';
import home from './modules/home';
import estatePlanning from './modules/estate-planning';
import probate from './modules/probate';
import trustAdmin from './modules/trust-admin';
import blog from './modules/blog';
import about from './modules/about';

angular
  .module('rqhlaw', [
    uiRouter,
    layout,
    home,
    estatePlanning,
    probate,
    trustAdmin,
    blog,
    contact,
    about
  ])
  .config(appRouter);
