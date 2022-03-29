'use strict';
const Service = require('egg').Service;


class userService extends Service {

    async createCard(name, num,type,length) {
        console.log(name, num,type,length)
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        const result = await this.app.mysql.insert('card', { cardName: name,type, cardNum: num, createDate: dateTime, updateDate: dateTime,length });
        return result.affectedRows === 1;
    }
    async getCardByNum(num) {
        const result = await this.app.mysql.select('card', { where: { cardNum: num } });
        return result;
    }
    async getCardById(id) {
        const result = await this.app.mysql.get('card', { id: id });
        return result;
    }
    async editCard(id,name,num,type,length) {
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        const result = await this.app.mysql.update('card', { id: id,cardName:name,cardNum:num,type,length,updateDate: dateTime });
        return  result.affectedRows === 1;
    }
    async deleteCard(id) {
        const result = await this.app.mysql.delete('card', { id: id });
        return result.affectedRows === 1
    }
    async getCardList(page,pageSize) {
        const result = await this.app.mysql.select('card', {limit: pageSize, offset: page-1});
        const count = await this.app.mysql.query('select count(*) from bussiness');
        return {
            list:result,
            count:count[0]['count(*)']
        };
    }
    async getCardListAll() {
        const result = await this.app.mysql.select('card');
        return result;
    }
}

module.exports = userService;