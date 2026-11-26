const r=require('express').Router();const c=require('../controllers/product.controller');r.get('/',c.list);r.post('/',c.create);r.put('/:id',c.update);r.delete('/:id',c.remove);module.exports=r;
