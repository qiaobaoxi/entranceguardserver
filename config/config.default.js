/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mp : {
      appId: 'wx5ef7ba0acfabf430', // 公众平台应用编号
      appSecret: '', // 公众平台应用密钥
      mchId: '1520875631', // 商户平台商家编号
      apiKey: 'dz2019dz2019dz2019dz2019dz2019dz', // 商户支付密钥
      notifyUrl: '' // 支付结果回调地址
    }
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598428635341_6901';

  // add your middleware config here
  config.middleware = [];
  config.jwt = {
    secret: '331751',
  };
  // 安全配置 （https://eggjs.org/zh-cn/core/security.html）
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
    },
    // 允许访问接口的白名单
    domainWhiteList: [ 'http://localhost:8080','http://localhost:3000'],
  };
  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql : {
      // 单数据库信息配置
      client: {
        // host
        host: '122.112.173.122',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'Qiao331751.',
        // 数据库名
        database: 'accesscard',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };
  return {
    ...config,
    ...userConfig,
  };
};
