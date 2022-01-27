'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  // 验证token，请求时在header配置 Authorization=`Bearer ${token}`
  // 特别注意：token不能直接发送，要在前面加上Bearer字符串和一个空格
  async index() {
    const { ctx, app } = this;
    try {
      const data = ctx.request.body;
      const token = app.jwt.sign({
        nickname: data.nickname,
      }, app.config.jwt.secret);
      ctx.success({token}) 
    } catch (error) {
      ctx.fail({},error.message)
    }
  }
}

module.exports = LoginController;
