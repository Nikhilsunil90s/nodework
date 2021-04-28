// const http = require('http');
const path = require('path');
const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');
const database = require('./utils/database');

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

const User = require('./models/user');
const Product = require('./models/product');


// store static data in server variable
server.use(express.static('public'));
server.set("view engine" , "ejs");
server.set("views" , "views");

//middlewares
Product.belongsTo(User , {constraint: true, ondelete: 'CASCADE'})

User.hasMany(Product)

server.use(express.urlencoded({extended: false})); // for parsing bodies of post requests

server.use((req,res,next) => {
    User.findByPk(1)
    .then(user => {
        console.log(user);
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
})

server.use('/admin',adminRoutes);
server.use(shopRoutes);




database.sync()
        .then((result) => {
            // console.log(result);
            return User.findByPk(1)
            // server.listen(3000);
        })
        .then(user => {
            if(!user) {
                return User.create({ name: 'TestName' , email: 'TestEmail@email.com' })
            }
            return user;
        })
        .then(mainuser => {
            console.log(mainuser);
            server.listen(3000);
        })
        .catch(err => console.log(err));
