// const http = require('http');
const fs = require('fs');
const path = require('path');
const admin = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

// const requestHandler = (req,res,next) => {
//     // console.log(req.url , req.method, req.headers);
//     if(req.url === '/') {
//         res.write("<html><body><form method = 'POST' action = '/addMessage'><input type = 'text' placeholder = 'Enter Something ... ' name = 'myinput'><input type = 'submit' value = 'Okay!'></form></body></html>");
//         return res.end();
//     }
//     if(req.url === '/addMessage' && req.method == 'POST') {
//         //fetch data from the post request
//         const body = [];
//         req.on('data' , (chunk) => {
//             body.push(chunk);
//         });
//         req.on('end' , () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody);
//             fs.writeFileSync('message.txt' , parsedBody.split('=')[1]);
//         })
//         res.write("<html><body><h2>Message Saved!</h2></body></html>");
//         return res.end();
//     }
//     res.setHeader('Content-Type'  , 'text/html');
//     res.write("<html><body><h1>Hello, World!</h1></body></html>");
//     return res.end();
// }

// const server = http.createServer(requestHandler);

// server.listen(3000);

const express = require('express');

const server = express();

//middlewares

server.use(express.urlencoded({extended: false})); // for parsing bodies of post requests

server.use(admin.router);
server.use(shopRoutes);


server.listen(3000);