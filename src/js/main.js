import angular from 'angular';

import './app.core/index';
import './app.user/index';
import './app.instrument/index';

angular
  .module('app', ['app.core', 'app.user', 'app.instrument']);
