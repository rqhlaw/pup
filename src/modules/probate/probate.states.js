import probateTemplate from './probate.pug';

function probateRouter ($stateProvider) {
  $stateProvider
    .state('app.probate', {
      url: '/probate',
      template: probateTemplate
    });
}

export { probateRouter as states };
