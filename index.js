const mongoose = require('mongoose');
const url = 'mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/ecom';


const productsSchema = new mongoose.Schema(
    {
        model:String,
        price: Number,
        brand: String
    }
   );

const  SaveInDb = async ()=>
{
   await mongoose.connect(url);


   let productsModel = new mongoose.model('products',productsSchema);
  let data = new productsModel(
        {
          model:"Noob 1" ,
          price: 0001,
          brand: "ProNoob"
        });
  
let result = await data.save();
console.log(result);

}

const UpdateInDb = async ()=>
{
    await mongoose.connect(url);
   
    const productsModel = new mongoose.model('products',productsSchema);

    let data = await productsModel.updateOne(
        {
            model:"Pro 1"
        },
        {            
            $set:
            {
                model: "Pro 1",
                price: 110,
                brand: 'Pro Z'
            }
        }
    );
    console.log(data);

}
// UpdateInDb();

const DeleteInDb = async ()=>
{
    await mongoose.connect(url);
    const productsModel = new mongoose.model('products',productsSchema);
    let data =  await productsModel.deleteOne({model:"Noob 1"});
    console.log(data);
}
// DeleteInDb();

const Find = async ()=>
{
    await mongoose.connect(url);
    const productsModel = new mongoose.model('products',productsSchema);
    let data = await productsModel.find({model: 'Pro 1'});
    console.log(data);
}

Find();