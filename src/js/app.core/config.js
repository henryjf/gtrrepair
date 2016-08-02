function config ($stateProvider, $urlRouterProvider, BackandProvider) {

  BackandProvider
  .setSignUpToken ('33607e7d-6210-45c3-946b-8faf59a24d9b')
  .setAppName('gtrrepair')
  ;

  $urlRouterProvider.otherwise('/');


  config.$inject = ['$stateProvider', '$urlRouterProvider', 'BackandProvider'];
  export { config };
