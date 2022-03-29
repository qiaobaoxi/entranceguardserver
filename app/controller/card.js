'use strict';

const Controller = require('egg').Controller;

class CardController extends Controller {
  async getCardList() {
    const { ctx } = this;
    try {
      const { page, pageSize } = ctx.request.query
      const list = await ctx.service.card.getCardList(page,pageSize);
      ctx.success(list)
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async getCardListAll() {
    const { ctx } = this;
    try {
      const list = await ctx.service.card.getCardListAll();
      ctx.success({list})
    } catch (error) {
      ctx.fail("", error.message)
    }
  }
  async createCard() {
    const { ctx } = this;
    try {
      const { name, num,type,length } = ctx.request.body
      const card = await ctx.service.card.getCardByNum(num)
      if (card.length>0) {
        ctx.fail({}, "卡号已经存在") 
      } else {
        const result = await ctx.service.card.createCard(name, num,type,length)
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
  async editCard() {
    const { ctx } = this;
    try {
      const { id,name, num,type,length } = ctx.request.body
      const cardList = await ctx.service.card.getCardByNum(num)
      for(let item of cardList){
         if(item.cardNum===num&&item.id!=id){
          ctx.fail({}, "卡号已经存在");
          return;
         }
      }
      const card = await ctx.service.card.getCardById(id)
      if(!card){
       return ctx.fail({}, "对象已删除或不存在");
      }else{
        const result = await ctx.service.card.editCard(id,name, num,type,length)
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
  async deleteCard() {
    const { ctx } = this;
    try {
      const { id } = ctx.request.body
      const card = await ctx.service.card.getCardById(id)
      if(!card){
       return ctx.fail({}, "对象已删除或不存在");
      }else{
        const result = await ctx.service.card.deleteCard(id)
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

module.exports = CardController;
