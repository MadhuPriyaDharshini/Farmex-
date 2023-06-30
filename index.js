const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./db');

const app = express();

const farmexRouter = require('./routes/farmexroute');

const questionroute = require('./routes/QueryRoute');

const answerRoute = require('./routes/AnswerRoute');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

db.on('error',console.error.bind(console,'MongoDB connection error'))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/signup.html");
});

app.use('/api',farmexRouter);

app.use('/api1',questionroute);

app.use('/api2',answerRoute);

app.listen(3000,function(){
    console.log("Server connected to the port 3000");
});
