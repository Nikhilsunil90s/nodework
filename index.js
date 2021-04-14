// const http = require('http');
const fs = require('fs');

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

server.get('/showForm' ,(req,res,next) => {
    console.log("In A Middleware!");
    // return res.send("<h1 style = 'text-align:center; color: blue'>Welcome To NothingJs!</h1>");
    return res.send("<html><body><form method = 'POST' action = '/addMessage'><input type = 'text' placeholder = 'Enter Something ... ' name = 'myinput'><input type = 'submit' value = 'Okay!'></form></body></html>");

});

server.post('/addMessage',(req,res,next) => {
    console.log("Inside Another Middleware!");
    console.log(req.body.myinput);
    fs.writeFileSync('messages.txt' , req.body.myinput);
    res.send("<h2>Message Saved!</h2>");
    return res.end();
});

server.use((req,res,next) => {
    return res.send("<h1 style = 'text-align:center; color: blue'>Welcome To ExpressJs!</h1>");
})



server.listen(3000);