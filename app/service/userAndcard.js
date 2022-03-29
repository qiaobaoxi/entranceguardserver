'use strict';
const Service = require('egg').Service;


class bussinessAnduserService extends Service {

    async getByUserId(userId) {
        const result = await this.app.mysql.get('userAndcard', { userId: userId });
        return result;
    }
    async createUserAndCard(userId,cardsId) {
        console.log(userId,cardsId)
        const dateTime = this.app.getDate()
        const result = await this.app.mysql.insert('userAndcard', {  userId: userId, cardsId,createDate: dateTime, updateDate: dateTime });
        return result.affectedRows === 1;
    }
    async updateData(id,cardsId,userId) {
        const result = await this.app.mysql.update('userAndcard', { id: id,cardsId,userId:userId,updateDate:this.app.getDate()});
        return  result.affectedRows === 1;
    }
    async deleteUserAndCard(id) {
        const result = await this.app.mysql.delete('userAndcard', { id: id });
        return result.affectedRows === 1
    }
}

module.exports = bussinessAnduserService;