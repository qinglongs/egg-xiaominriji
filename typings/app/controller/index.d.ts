// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBillController from '../../../app/controller/bill-controller';
import ExportLogController from '../../../app/controller/log-controller';

declare module 'egg' {
  interface IController {
    billController: ExportBillController;
    logController: ExportLogController;
  }
}
