'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');

// 微信相关接口常量
const jscode2sessionUri = 'https://api.weixin.qq.com/sns/jscode2session'; // 微信临时授权码
const tokenUri = 'https://api.weixin.qq.com/cgi-bin/token'; // 微信凭据
const msgSecCheck = 'https://api.weixin.qq.com/wxa/msg_sec_check'; // 微信敏感词
const sendMsgUri =
  'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send'; // 微信服务通知
const payUri = 'https://api.mch.weixin.qq.com/pay/unifiedorder'; // 微信统一下单

class MPService extends Service {

  /**
  * 登录凭证校验
  * @param {String} code 临时授权码
  * @return {Object} 微信返回的数据
  * @see https://developers.weixin.qq.com/miniprogram/dev/api/code2Session.html?search-key=jscode2session
  */
  async login(code) {
    const {
      appId,
      appSecret,
    } = this.app.config.mp;
    const url = `${jscode2sessionUri}?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
    const res = await this.ctx.curl(url, {
      dataType: 'json',
    });
    return res.data;
  }
  https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ffe85a65414c384&redirect_uri=https://www.dianzedushu.com&response_type=code&scope=snsapi_userinfo#wechat_redirect
  https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6efef56cacb25a9f&redirect_uri=https://www.dianzedushu.com&response_type=code&scope=snsapi_base#wechat_redirect
  /**
  * 获取Token
  * @return {Object} 微信返回的数据
  * @see https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html
  */
  async getToken() {
    const {
      appId,
      appSecret,
    } = this.app.config.mp;
    const url = `${tokenUri}?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;
    const res = await this.ctx.curl(url, {
      dataType: 'json',
    });
    return res.data;
  }
}

module.exports = MPService;