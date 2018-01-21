import aboutTemplate from './about.pug';

function aboutRouter ($stateProvider) {
  $stateProvider
    .state('app.about', {
      url: '/about',
      template: aboutTemplate
    });
}

export { aboutRouter as states };
