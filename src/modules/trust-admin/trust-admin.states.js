import trustAdminTemplate from './trust-admin.pug';

function trustAdminRouter ($stateProvider) {
  $stateProvider
    .state('app.trust-admin', {
      url: '/trustadministration',
      template: trustAdminTemplate
    });
}

export { trustAdminRouter as states };
