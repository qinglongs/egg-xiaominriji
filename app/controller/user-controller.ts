import { Controller } from 'egg';

class UserController extends Controller {

  /**
   * @function 登录
   */
  async login() {
    const { app, ctx } = this;
    const { request } = ctx;
    try {
      await this.ctx.service.userService.login(request.body);

      // 生成token
      const token = await this.app.jwt.sign({
        username: request.body.username,
        password: request.body.password,
        iat: +new Date() + (1000 * 60),
      }, app.config.jwt.secret);

      if (token) {
        ctx.body = ctx.helper.generateSuccess({ token });
      } else {
        ctx.body = ctx.helper.generateError(null, 'token生成失败', 400);
      }
    } catch (e) {
      ctx.body = ctx.helper.generateError(null, '用户名或密码错误', 400);
    }
  }

  /**
   * @function 注册帐号
   */
  async register() {
    const { ctx } = this;

    const userId = await this.service.userService.register(ctx.request.body);

    ctx.body = ctx.helper.generateSuccess(userId);

  }

  /**
   * @function 编辑用户
   */
  async editUser() {
    const { ctx } = this;

    try {
      await this.service.userService.editUser(ctx.request.body);
      ctx.body = ctx.helper.generateSuccess(null);
    } catch (e) {
      ctx.body = ctx.helper.generateError(null);
    }
  }

  /**
   * @function 注销用户
   */
  async unRegister() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    try {
      await this.service.userService.unRegister(+id);
      ctx.body = ctx.helper.generateSuccess<number>(+id);
    } catch (e) {
      ctx.body = ctx.helper.generateError(null, '注销失败，请联系管理员', 400);
    }
  }
}

export default UserController;
