const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

// O middleware pode ser colocado dentro de uma rota especifíca
// ou antes de várias
// Quando colocada antes de várias, atentar-se para não travar execuções que
// não deveriam ser travadas
router.get(
  '/contacts',
  (request, response, next) => {
    request.appID = 'MeuAppID';
    next();
  },
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
