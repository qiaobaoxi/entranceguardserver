'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getBussinessList() {
    const { ctx } = this;
    ctx.body = 'hi, 1111';
  }
  async createBussiness() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
