'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
   //user
   router.get('/getCardList', controller.card.getCardList);
   router.get('/getCardListAll', controller.card.getCardListAll);
   router.post('/createCard', controller.card.createCard);
   router.post('/editCard', controller.card.editCard);
   router.post('/deleteCard', controller.card.deleteCard);
  //user
  router.get('/getUserList', controller.user.getUserList);
  router.get('/getUserListAll', controller.user.getUserListAll);
  router.post('/createUser', controller.user.createUser);
  router.post('/editUser', controller.user.editUser);
  router.post('/deleteUser', controller.user.deleteUser);
  router.post('/saveUserAndCard', controller.user.saveUserAndCard);
  //bussiness 
  router.get('/getBussinessList', controller.bussiness.getBussinessList);
  router.post('/createBussiness', controller.bussiness.createBussiness);
  router.post('/editBussiness', controller.bussiness.editBussiness);
  router.post('/deleteBussiness', controller.bussiness.deleteBussiness);
  router.post('/login', controller.login.index);
  router.post('/saveBussinessAnduser', controller.bussiness.saveBussinessAnduser);
};
