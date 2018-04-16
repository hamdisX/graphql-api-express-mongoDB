
import mongoose, { Collection } from 'mongoose' ;

  //create a schema
const Schema = mongoose.Schema;
const postSchema = new Schema({
    uid:{
        type : String ,
        required:true
    },
    title :{
        type: String
    },
    body:{
        type : String
    }
},
{collection: 'post' , timestamps:true}
);


//create and export model
export default mongoose.model('post',postSchema) ;
