function NavController ($rootScope, UserService) {

  let vm = this;

  vm.isAuthenticated = false;
  vm.logout = logout;


}

NavController.$inject = ['$rootScope', '$UserService'];
export {NavController};
