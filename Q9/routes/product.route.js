const router=require('express').Router();
const c=require('../controllers/product.controller');
router.get('/',c.getProducts);
router.post('/',c.createProduct);
router.get('/:id',c.getProductById);
router.put('/:id',c.updateProductById);
router.delete('/:id',c.deleteProductById);
module.exports=router;
