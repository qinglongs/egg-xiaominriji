import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

import { generateSuccess, generateError } from '../app/utils/generate-response-json/generate-response-json';

import htmlToPdf from '../app/utils/html-to-pdf/html-to-pdf';

// https://eggjs.org/zh-cn/basics/config.html
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607046238852_3393';

  // add your egg config in here
  config.middleware = [
    'test',
    'auth',
  ];

  // 关闭csrf防范
  config.security = {
    csrf: false,
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'eggdatabase',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  config.jwt = {
    secret: '123456',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['http://localhost:8080'],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // 不需要验证token的路由
  config.routerAuth = ['/user/login', '/user/register'];

  // 生成返回信息的方法
  config.generateSuccess = generateSuccess;
  config.generateError = generateError;

  // 网页转pdf
  config.htmlToPdf = htmlToPdf;

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
