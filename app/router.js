'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getBussinessList', controller.bussiness.getBussinessList);
  router.get('/createBussiness', controller.bussiness.createBussiness);
  router.post('/login', controller.login.index);
};
