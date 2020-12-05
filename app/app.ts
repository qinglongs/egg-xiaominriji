import { Application } from 'egg';

class AppBootHook {
  constructor(app: Application) {
    this.app = app;
  }

  app: Application | any = {};


}

export default AppBootHook;
