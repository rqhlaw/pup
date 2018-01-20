import homeTemplate from './home.pug';

function homeRouter ($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/',
      template: homeTemplate
    });
}

export { homeRouter as states };
