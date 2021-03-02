module.exports = (_, app) => {
  return async (ctx, next) => {
    // 拿到不需要验证的token的路由
    const routerAuth = app.config.routerAuth;
    // 获取当前路由
    const url = ctx.url;
    // 判断当前路由是否需要验证token
    const flag = routerAuth.includes(url);
    if (flag) {
      await next();
    } else {
      // 获取token,如果没有传入token，则为空
      const token = ctx.headers.authorization || '';

      // 把Bearer 截取掉，解析的时候不需要加上Bearer
      const subStrToken = token.substring(7);

      // 解析token
      try {
        const decode = await app.jwt.verify(subStrToken, app.config.jwt.secret);

        if (decode.iat - +new Date() < 0) {

          ctx.body = ctx.helper.generateError(null, 'token已失效，请重新登录', 401);
        } else {
          ctx.state.userinfo = decode;
          await next();
        }
      } catch (err) {
        ctx.status = 401;
        ctx.body = ctx.helper.generateError(null, 'token失效或解析错误', 401);
      }
    }
  };
};
