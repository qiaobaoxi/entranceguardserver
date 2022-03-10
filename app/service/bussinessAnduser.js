'use strict';
const Service = require('egg').Service;


class bussinessAnduserService extends Service {

    async getByBussinessId(bussinessId) {
        const result = await this.app.mysql.get('bussinessAnduser', { bussinessId: bussinessId });
        return result;
    }
    async createBussinessAndUser(bussinessId,usersId) {
        const dateTime = this.app.getDate()
        const result = await this.app.mysql.insert('bussinessAnduser', { bussinessId: bussinessId, usersId: usersId, createDate: dateTime, updateDate: dateTime });
        return result.affectedRows === 1;
    }
    async updateData(id,bussinessId,usersId) {
        const result = await this.app.mysql.update('bussinessAnduser', { id: id,bussinessId,usersId:usersId,updateDate:this.app.getDate()});
        return  result.affectedRows === 1;
    }
    async deleteBussinessAndUser(id) {
        const result = await this.app.mysql.delete('bussinessAnduser', { id: id });
        return result.affectedRows === 1
    }
}

module.exports = bussinessAnduserService;