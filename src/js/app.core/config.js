function config ($stateProvider, $urlRouterProvider, BackandProvider) {

  BackandProvider
  .setSignUpToken ('33607e7d-6210-45c3-946b-8faf59a24d9b')
  .setAppName('gtrrepair')
  ;

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'NavController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })

    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })

    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/logintpl.html',
      controller: 'LoginController as vm'
    })


  config.$inject = ['$stateProvider', '$urlRouterProvider', 'BackandProvider'];
  export { config };
