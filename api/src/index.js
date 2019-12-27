// const express = require('express');
// const mysql = require('mysql');

// const app = express();

// const connection = mysql.createConnection({
//     host: 'mysql-container',
//     user: 'root',
//     password: 'password',
//     database: 'docker'
// })

// connection.connect();

// app.get('/products',function(req,res){
//     connection.query( 'SELECT * FROM products', function(error,results){
//         if ( error ){
//             throw error ;
//         }
//         res.send( results.map( item => ( {name: item.name, price: item.price} ) ) )
//     });
// });

// app.listen( 9001, '0.0.0.0', function() {
//     console.log('listening on port 9001')
// } )

var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 8080;
const HOST = '0.0.0.0';


router.get("/",function(req,res){
    res.send( { ok : true } );
});


app.use("/", router);

app.listen( 9001, function () {
    console.log('Example app listening on port 9001!')
})