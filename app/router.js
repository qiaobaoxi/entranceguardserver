'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //user
  router.get('/getUserList', controller.user.getUserList);
  router.get('/getUserListAll', controller.user.getUserListAll);
  router.post('/createUser', controller.user.createUser);
  router.post('/editUser', controller.user.editUser);
  router.post('/deleteUser', controller.user.deleteUser);
  //bussiness 
  router.get('/getBussinessList', controller.bussiness.getBussinessList);
  router.post('/createBussiness', controller.bussiness.createBussiness);
  router.post('/editBussiness', controller.bussiness.editBussiness);
  router.post('/deleteBussiness', controller.bussiness.deleteBussiness);
  router.post('/login', controller.login.index);
  router.post('/saveBussinessAnduser', controller.bussiness.saveBussinessAnduser);
};
