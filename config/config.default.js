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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
