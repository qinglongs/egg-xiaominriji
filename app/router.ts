import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 获取日志列表数据
  router.get('/log-list', controller.logController.getLogList);

  // 添加日志
  router.post('/log-list', controller.logController.postAddLog);

  // 删除日志
  router.del('/log-list', controller.logController.delLog);

  // 获取日志详情
  router.get('/log-detail', controller.logController.getLogDetail);

  // 更新日志
  router.post('/log-update', controller.logController.updateLog);
};
