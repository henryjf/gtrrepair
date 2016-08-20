import angular from 'angular';

import { AddInstrumentController } from './controllers/addinstrument.controller';
import { DetailController } from './controllers/detail.controller';

angular
  .module('app.instrument', [])
  .controller('AddInstrumentController', AddInstrumentController)
  .controller('DetailController', DetailController)
  .service('InstrumentService', InstrumentService);
