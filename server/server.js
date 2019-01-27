const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const config = require('./config/config').get(process.env.NODE_ENV);



const app = express();
const mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
 
//Models
const {User} = require('./models/user');



//Users//

app.post('/api/users/register', (req, res)=> {
    res.status(200);
})




const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Server Running at ${port}`)
})