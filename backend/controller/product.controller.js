import mongoose from "mongoose";
import Product from "../models/products.model.js";


export const getProduct = async (req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json({success:true,data: products});
  }catch(error){
    console.log(error.mesage);
    res.status(500).json({success: false, message: " Server error!"});
  }
} ;

//export default getProduct ;

export const updateProduct = async (req,res)=>{
const { id } = req.params ;
const product = req.body ;
if(!mongoose.Types.ObjectId.isValid(id)){
  
  return res.status(404).json({success:false, message: "Not found!"});
}


 try{
   const newProduct = await Product.findByIdAndUpdate(id,product,{new:true});
   return res.status(200).json({success:true,data:newProduct});

 }catch(error){
   return res.status(500).json({success:false,mesage:"Server error"});
 }

};

export const createProduct = async (req, res) => {
  const products = req.body;
  if (!products.name || !products.price || !products.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields." });
  }

  const newProduct = new Product(products);
  try {
    await newProduct.save();
    return res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in createProduct ", error.message);
    return res.status(500).json({ success: false, mesage: "Server error" });
  }
} ;

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({success:true, message: " Product deleted "});
  }catch(error){
    res.status(404).json({success:false,message:"product not found."});
  }
}