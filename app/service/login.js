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
}

module.exports = MPService;