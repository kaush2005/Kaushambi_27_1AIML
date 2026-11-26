const express=require('express');
const productRoutes=require('./routes/product.route');
const app=express(); const PORT=process.env.PORT||3009;
app.use(express.json());
app.get('/',(req,res)=>res.send('Q9 Product REST API is running. See /api/products.'));
app.use('/api/products',productRoutes);
app.use((req,res)=>res.status(404).json({message:'Route not found'}));
app.listen(PORT,()=>console.log(`Q9 API running at http://localhost:${PORT}`));
