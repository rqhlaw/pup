import contactTemplate from './contact.pug';

function contactRouter ($stateProvider) {
  $stateProvider
    .state('app.contact', {
      url: '/contact',
      template: contactTemplate
    });
}

export { contactRouter as states };
