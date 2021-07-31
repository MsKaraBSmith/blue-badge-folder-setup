require("dotenv").config();
let express = require('express');
const app = express();
const sequelize = require('./db');
let journal = require('./controllers/journalcontroller');

// let about = require('./controllers/journalcontroller');

let user = require('./controllers/usercontroller');


sequelize.sync();
//sequelize.sync({force: true})

// app.use("/test", function(req, res){
//     res.send('This is a message from the test endpoint on the server');
// });

// app.use("/kara", function(req, res){
//     res.send("My name is Kara and I am none of your business years old.");
// });

// Have endpoint of journal/practice
// send a response from the endpoint (This is practice route)
// app.use('/journal', require('.controllers/journalcontroller'));
app.use(express.json());

//** Exposed Route **/
app.use('/user', user);

/** Protected Route **/
//app.use(require("./middleware/validate-session")); - there are a few routes in the journalcontroller we will want exposed to all users, so we cannot use this option
app.use('/journal', journal);

 

// app.use('/about', about);



app.listen(3000, function(){
    console.log('App is listening on port 3000');
});

