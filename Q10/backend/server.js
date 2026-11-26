const express=require('express');const mongoose=require('mongoose');const path=require('path');const productRoutes=require('./routes/product.route');
const app=express();const PORT=process.env.PORT||3010;const MONGO_URI=process.env.MONGO_URI||'mongodb://127.0.0.1:27017/fullstack_q10';
app.use(express.json());app.use(express.static(path.join(__dirname,'../frontend')));app.get('/api/health',(req,res)=>res.json({status:'ok',database:mongoose.connection.readyState===1?'connected':'disconnected'}));app.use('/api/products',productRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Internal server error'});});
mongoose.connect(MONGO_URI).then(()=>{console.log('MongoDB connected');app.listen(PORT,()=>console.log(`Q10 running at http://localhost:${PORT}`));}).catch(err=>{console.error('MongoDB connection failed:',err.message);process.exit(1);});
