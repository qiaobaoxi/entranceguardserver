'use strict';
const Service = require('egg').Service;


class userService extends Service {

    async createUser(name, num) {
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        const result = await this.app.mysql.insert('user', { userName: name, userNum: num, createDate: dateTime, updateDate: dateTime });
        return result.affectedRows === 1;
    }
    async getUserByNum(num) {
        const result = await this.app.mysql.select('user', { where: { userNum: num } });
        return result;
    }
    async getUserById(id) {
        const result = await this.app.mysql.get('user', { id: id });
        return result;
    }
    async editUser(id,name,num) {
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        const result = await this.app.mysql.update('user', { id: id,userName:name,userNum:num,updateDate: dateTime });
        return  result.affectedRows === 1;
    }
    async deleteUser(id) {
        const result = await this.app.mysql.delete('user', { id: id });
        return result.affectedRows === 1
    }
    async getUserList(page,pageSize) {
        const result = await this.app.mysql.select('user', {limit: pageSize, offset: page-1});
        const count = await this.app.mysql.query('select count(*) from bussiness');
        return {
            list:result,
            count:count[0]['count(*)']
        };
    }
    async getUserListAll() {
        const result = await this.app.mysql.select('user');
        return result;
    }
}

module.exports = userService;