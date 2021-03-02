import { Controller } from 'egg';

class LoginController extends Controller {
  async login() {
    const { app, ctx } = this;
    const { request } = ctx;

    const token = await this.app.jwt.sign({
      username: request.body.username,
      password: request.body.password,
    }, app.config.jwt.secret);

    if (token) {
      ctx.body = app.config.generateSuccess({ token });
    } else {
      ctx.body = app.config.generateError(null, '用户名或密码错误', 400);
    }

  }
}

export default LoginController;
