const express= require('express');
const app = express();
const env = require('dotenv');
const main = require('./lib/mongo');
const cors = require('cors');
env.config();

// controller import
const UserControl = require('./controller/UserController');

const port = process.env.PORT || 3000;

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.post('/auth',(req,res)=>{
    const body = req.body;
    console.log(body); // print, System.out.println, 
    try{
        UserControl(body)
        .then((result)=>{ console.log(result) })
        .catch((err)=>{ console.log(err) });
    }
    catch(err){ console.log(err) }
    res.json({
        status:200,
        message:body,
    });
});

app.listen(port,()=>{
    main();
    console.log(`Server is running on port ${port}`);
})