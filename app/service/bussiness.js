'use strict';
const Service = require('egg').Service;


class bussinessService extends Service {

    async createBussiness(name, num) {
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        const result = await this.app.mysql.insert('bussiness', { bussinessName: name, bussinessNum: num, createDate: dateTime, updateDate: dateTime });
        return result.affectedRows === 1;
    }
    async getBussinessByNum(num) {
        const result = await this.app.mysql.select('bussiness', { where: { bussinessNum: num } });
        return result;
    }
    async getBussinessById(id) {
        const result = await this.app.mysql.get('bussiness', { id: id });
        return result;
    }
    async editBussiness(id,name,num) {
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        const result = await this.app.mysql.update('bussiness', { id: id,bussinessName:name,bussinessNum:num,updateDate: dateTime });
        return  result.affectedRows === 1;
    }
    async deleteBussiness(id) {
        const result = await this.app.mysql.delete('bussiness', { id: id });
        return result.affectedRows === 1
    }
    async getBussinessList(page,pageSize) {
        const result = await this.app.mysql.select('bussiness', {limit: pageSize, offset: page-1});
        const count = await this.app.mysql.query('select count(*) from bussiness');
        return {
            list:result,
            count:count[0]['count(*)']
        };
    }
}

module.exports = bussinessService;