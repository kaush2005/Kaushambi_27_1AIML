let products = [
  { id: 1, name: 'Laptop', price: 50000, description: 'HP Laptop' },
  { id: 2, name: 'Mobile', price: 20000, description: 'Samsung Mobile' }
];
let nextId = 3;
const validate = (body) => { const name=String(body.name||'').trim(); const description=String(body.description||'').trim(); const price=Number(body.price); if(!name||!description||!Number.isFinite(price)||price<=0) return {error:'Name, positive price and description are required.'}; return {value:{name,price,description}}; };
const getProducts=(req,res)=>res.status(200).json({message:'Products fetched successfully',products});
const getProductById=(req,res)=>{const product=products.find(p=>p.id===Number(req.params.id)); return product?res.json({product}):res.status(404).json({message:'Product not found'});};
const createProduct=(req,res)=>{const result=validate(req.body); if(result.error)return res.status(400).json({message:result.error}); const product={id:nextId++,...result.value}; products.push(product); return res.status(201).json({message:'Product created successfully',product});};
const updateProductById=(req,res)=>{const product=products.find(p=>p.id===Number(req.params.id)); if(!product)return res.status(404).json({message:'Product not found'}); const result=validate(req.body); if(result.error)return res.status(400).json({message:result.error}); Object.assign(product,result.value); return res.json({message:'Product updated successfully',product});};
const deleteProductById=(req,res)=>{const index=products.findIndex(p=>p.id===Number(req.params.id)); if(index<0)return res.status(404).json({message:'Product not found'}); const [deleted]=products.splice(index,1); return res.json({message:'Product deleted successfully',product:deleted});};
module.exports={getProducts,getProductById,createProduct,updateProductById,deleteProductById};
