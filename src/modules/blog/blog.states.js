import blogTemplate from './blog.pug';

function blogRouter ($stateProvider) {
  $stateProvider
    .state('app.blog', {
      url: '/blog',
      template: blogTemplate
    });
}

export { blogRouter as states };
