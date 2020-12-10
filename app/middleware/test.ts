module.exports = () => {
  return async (ctx: { body: string; status: number; }, next: () => any) => {
    await next();
    if (!ctx.body) return;
    // ctx.body = '我是middleware';
  };
};
