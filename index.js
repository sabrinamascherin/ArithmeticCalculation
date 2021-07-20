const express = require('express'); //importing express package
const app = express(); //creating an app instance
const calc = require('./arithmetic.js');

//server
app.listen(5000, function(){
    console.log('Server running on port 5000')
});

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(function(req, res, next){
    console.log("I am the middleware");
    next();

//post
app.post('/', (req, res) => {
    let operation = req.body.operation;
    let val1 = req.body.val1;
    let val2 = req.body.val2;
    let result;
    if (operation === 'add') {
        result = math.add(parseInt(val1), parseInt(val2));
    }else if (operation === 'sub'){
        result = math.sub(parseInt(val1), parseInt(val2));
    }else if (operation === 'mul'){
        result = math.mul(parseInt(val1), parseInt(val2));
    }else if (operation === 'div'){
        result = math.div(parseInt(val1), parseInt(val2));

    res.send(`Operation: ${operation} <br> Value 1: ${val1} Value 2: ${val2}`)
}});
});