// Core
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// Startup
import appRouter from './app.states';
// Features
import layout from 'modules/layout';
import home from 'modules/home';
import estatePlanning from 'modules/estate-planning';
import probate from 'modules/probate';
import trustAdmin from 'modules/trust-admin';
import blog from 'modules/blog';
import taxPlanning from 'modules/tax-planning';
import about from 'modules/about';
import contact from 'modules/contact';

export default angular.module('rqhlaw', [
    uiRouter,
    layout,
    home,
    estatePlanning,
    probate,
    trustAdmin,
    blog,
    taxPlanning,
    about,
    contact
  ])
  .config(appRouter)
  .name;
