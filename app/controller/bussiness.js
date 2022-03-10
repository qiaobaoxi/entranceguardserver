'use strict';

const Controller = require('egg').Controller;

class BussinessController extends Controller {
  async getBussinessList() {
    const { ctx } = this;
    try {
      const { page, pageSize } = ctx.request.query
      const result = await ctx.service.bussiness.getBussinessList(page,pageSize);
      for(let item of result.list){
        item.relationData = await ctx.service.bussinessAnduser.getByBussinessId(item.id)
      }
      ctx.success(result)
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async createBussiness() {
    const { ctx } = this;
    try {
      const { name, num } = ctx.request.body
      const bussiness = await ctx.service.bussiness.getBussinessByNum(num)
      console.log(bussiness)
      if (bussiness.length>0) {
        ctx.fail({}, "公司号已经存在") 
      } else {
        const result = await ctx.service.bussiness.createBussiness(name, num)
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
  async editBussiness() {
    const { ctx } = this;
    try {
      const { id,name, num } = ctx.request.body
      const bussinessList = await ctx.service.bussiness.getBussinessByNum(num)
      for(let item of bussinessList){
         if(item.bussinessNum===num&&item.id!=id){
          ctx.fail({}, "公司号已经存在");
          return;
         }
      }
      const bussiness = await ctx.service.bussiness.getBussinessById(id)
      if(!bussiness){
       return ctx.fail({}, "对象已删除或不存在");
      }else{
        const result = await ctx.service.bussiness.editBussiness(id,name, num)
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
  async deleteBussiness() {
    const { ctx } = this;
    try {
      const { id } = ctx.request.body
      const bussiness = await ctx.service.bussiness.getBussinessById(id)
      if(!bussiness){
       return ctx.fail({}, "对象已删除或不存在");
      }else{
        const result = await ctx.service.bussiness.deleteBussiness(id);
        if (result) {
          const relationData =await ctx.service.bussinessAnduser.getByBussinessId(id);
          if(relationData){
            await ctx.service.bussinessAnduser.deleteBussinessAndUser(relationData.id);
          }
          ctx.success({}, "修改成功")
        } else {
          ctx.fail({}, result)
        }
      }
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async saveBussinessAnduser() {
    const { ctx } = this;
    try {
      let { id,bussinessId,usersId } = ctx.request.body
      if(Array.isArray(usersId)){
        usersId=usersId.join(",");
      }
      if(id){
        const result = await ctx.service.bussinessAnduser.updateData(id,bussinessId,usersId)
        if (result) {
          ctx.success({}, "修改成功")
        } else {
          ctx.fail({}, result)
        }
      }else{
        const result = await ctx.service.bussinessAnduser.createBussinessAndUser(bussinessId,usersId)
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
}

module.exports = BussinessController;
