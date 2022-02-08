'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getBussinessList', controller.bussiness.getBussinessList);
  router.post('/createBussiness', controller.bussiness.createBussiness);
  router.post('/editBussiness', controller.bussiness.editBussiness);
  router.post('/deleteBussiness', controller.bussiness.deleteBussiness);
  router.post('/login', controller.login.index);
};
