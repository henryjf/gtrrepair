import angular from 'angular';

import './app.core/index';
import './app.user/index';

angular
  .module('app', ['app.core', 'app.user', 'app.instrument']);
