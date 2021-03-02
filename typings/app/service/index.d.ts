// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBillService from '../../../app/service/bill-service';
import ExportLogService from '../../../app/service/log-service';
import ExportUserService from '../../../app/service/user-service';

declare module 'egg' {
  interface IService {
    billService: AutoInstanceType<typeof ExportBillService>;
    logService: AutoInstanceType<typeof ExportLogService>;
    userService: AutoInstanceType<typeof ExportUserService>;
  }
}
