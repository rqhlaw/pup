export default function appRouter (
  $locationProvider,
  $stateProvider,
  $urlServiceProvider,
  $windowProvider
) {
  const $window = $windowProvider.$get();

  $locationProvider.html5Mode({ enabled: true });

  // Allow optional trailing slashes
  $urlServiceProvider.config.strictMode(false);

  // URL rules
  let ruleConfig = $urlServiceProvider.rules;

  ruleConfig.when('/', (match, urlParts, router) => {
    router.stateService.go('app.home');
  });

  ruleConfig.otherwise({
    state: 'app.home',
    options: { location: false }
  });

  $stateProvider.state('app-container', {
    abstract: true,
    template: '<ui-view class="app-container"/>'
  });
}
