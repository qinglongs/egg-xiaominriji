import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;

  // 获取日志列表数据
  router.get('/log-list', jwt, controller.logController.getLogList);
  // 添加日志
  router.post('/log-list', controller.logController.postAddLog);
  // 删除日志
  router.del('/log-list', controller.logController.delLog);
  // 获取日志详情
  router.get('/log-detail', controller.logController.getLogDetail);
  // 更新日志
  router.post('/log-update', controller.logController.updateLog);


  // 登录
  router.post('/user/login', controller.userController.login);
  // 注册用户
  router.post('/user/register', controller.userController.register);
  // 编辑用户
  router.put('/user/edit', controller.userController.editUser);
  // 注销用户
  router.delete('/user/unregister', controller.userController.unRegister);
};
