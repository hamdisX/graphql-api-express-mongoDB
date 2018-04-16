
import express from 'express' ;
import mongoose from 'mongoose' ;
import graphqlHTTP from 'express-graphql'

//import schema from ./graphqlget(

const app = express();

mongoose.connect('mongodb://root:root@ds033125.mlab.com:33125/graphql') ;
const db=mongoose.connection;
db.on('error',()=>console.log('faild to connect to database'))
.once('open',()=>console.log('connected to DB'))

app.get('/',(req,res)=>{
    res.send('hello , this graphql api') ;

}) ;


//GraphQL api endpoint 
app.use('/graphql',graphqlHTTP(()=>
({
    schema ,
    graphql : true ,
    pretty : true
}
))) ;


app.listen(5000,()=>{
    console.log('Graphql runing at port 5000') ;
}) ;
