module.exports = {
    success(data, msg = '请求成功') {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        this.body = {
            code: 1,
            data,
            msg
        }
    },
    fail(data, msg) {
        this.body = {
            code: 0,
            data,
            msg
        }
    }
};