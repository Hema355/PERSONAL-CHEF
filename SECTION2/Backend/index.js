const express = require("express");


const app = express(); // initialize express
const port = 5000;
 
const userRouter=require('./routers/userRouter'); 
const recipeRouter=require('./routers/recipeRouter'); 

app.use(express.json());
const cors = require('cors');


app.use(cors());
app.use('/user',userRouter);
app.use('/recipe',recipeRouter)


app.get('/',(req,res)=>{
    res.send('request from route')
})
app.listen( port,() =>{ 

    console.log('server started');
}); // listen for requests
