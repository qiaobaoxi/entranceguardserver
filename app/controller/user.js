'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserList() {
    const { ctx } = this;
    try {
      const { page, pageSize } = ctx.request.query
      const list = await ctx.service.user.getUserList(page,pageSize);
      ctx.success(list)
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async getUserListAll() {
    const { ctx } = this;
    try {
      const list = await ctx.service.user.getUserListAll();
      ctx.success({list})
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async createUser() {
    const { ctx } = this;
    try {
      const { name, num } = ctx.request.body
      const user = await ctx.service.user.getUserByNum(num)
      if (user.length>0) {
        ctx.fail({}, "员工号已经存在") 
      } else {
        const result = await ctx.service.user.createUser(name, num)
        if (result) {
          ctx.success({}, "添加成功")
        } else {
          ctx.fail({}, result)
        }
      }
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async editUser() {
    const { ctx } = this;
    try {
      const { id,name, num } = ctx.request.body
      const UserList = await ctx.service.user.getUserByNum(num)
      for(let item of UserList){
         if(item.UserNum===num&&item.id!=id){
          ctx.fail({}, "员工号已经存在");
          return;
         }
      }
      const user = await ctx.service.user.getUserById(id)
      if(!user){
       return ctx.fail({}, "对象已删除或不存在");
      }else{
        const result = await ctx.service.user.editUser(id,name, num)
        if (result) {
          ctx.success({}, "修改成功")
        } else {
          ctx.fail({}, result)
        }
      }
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async deleteUser() {
    const { ctx } = this;
    try {
      const { id } = ctx.request.body
      const user = await ctx.service.user.getBussinessById(id)
      if(!user){
       return ctx.fail({}, "对象已删除或不存在");
      }else{
        const result = await ctx.service.user.deleteBussiness(id)
        if (result) {
          ctx.success({}, "修改成功")
        } else {
          ctx.fail({}, result)
        }
      }
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
}

module.exports = UserController;
