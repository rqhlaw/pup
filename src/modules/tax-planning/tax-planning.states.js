import taxPlanningTemplate from './tax-planning.pug';

function taxPlanningRouter ($stateProvider) {
  $stateProvider
    .state('app.tax-planning', {
      url: '/taxplanning',
      template: taxPlanningTemplate
    });
}

export { taxPlanningRouter as states };
