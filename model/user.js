
import mongoose from 'mongoose' ;

  //create a schema
const Schema = mongoose.Schema ;
const userSchema = new Schema({
    email :{
        type : String ,
        required: true ,
        unique: true
    },
    name :{
        type:String ,
        required: true
    }
},
{
    collection: 'user', timestamps:true
});

//create and export model
export default mongoose.model('user',userSchema) ;
