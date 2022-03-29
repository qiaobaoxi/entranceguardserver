module.exports = {
    getDate() {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        const date = new Date();
        const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart("0",2) + "-" + date.getDate().toString().padStart("0",2) + " " + date.getHours().toString().padStart("0",2) + ":" + date.getMinutes().toString().padStart("0",2) + ":" + date.getSeconds().toString().padStart("0",2)
        return dateTime;
    }
};