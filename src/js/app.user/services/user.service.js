function UserService (Bankand, $rootScope, $cookies, $state) {

  this.register = register;
  this.login = login;
  this.checkAuth = checkAuth;
  this.logout = logout;
  this.authChanged = authChanged;

  function checkAuth() {
    let token = $cookies.get('user');
    return user ? true : false;
  }
 // stat = status
  function authChanged(stat) {
    $rootScope.$broadcast('authChanged', stat);
  }

  function register(user) {
    return Backand.signup(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );
  }

  function login(user) {
    return Backand.signin(
      user.username,
      user.password
    );
  }

  function logout() {
    $cookies.remove('user');
    Backand.signout();
    $state.go('root.login');
  }











}

UserService.$inject = ['Backand', '$rootScope', '$cookies', '$state'];
export { UserService };
