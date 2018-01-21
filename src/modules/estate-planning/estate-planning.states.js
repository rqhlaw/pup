import estatePlanningTemplate from './estate-planning.pug';

function estatePlanningRouter ($stateProvider) {
  $stateProvider
    .state('app.estate-planning', {
      url: '/estateplanning',
      template: estatePlanningTemplate
    });
}

export { estatePlanningRouter as states };
