import layoutTemplate from './layout.pug';

function layoutRouter ($stateProvider) {
  $stateProvider
    .state('app', {
      parent: 'app-container',
      abstract: true,
      template: layoutTemplate
    });
}

export { layoutRouter as states };
