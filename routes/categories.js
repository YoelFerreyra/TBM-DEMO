const { Router } = require('express');
const router = Router();
const categoriesControllers = require('../controllers/categories')

router.get('/', categoriesControllers.getAllCategories);
router.get('/:id', categoriesControllers.getOneCategories);
router.post('/',categoriesControllers.createOneCategories);
router.put('/:id', categoriesControllers.updateOneCategories);
router.delete("/:id", categoriesControllers.deleteOneCategories);

module.exports= router;