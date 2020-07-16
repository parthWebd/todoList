//first of all install mongoose on your folder-npm install mongoose
//check package.json.dependencies for mongoose version

//require the mongoose library
const mongoose=require('mongoose');
//connect to db
mongoose.connect('mongodb://localhost/task_list_db');

//acquire the connection  to check if it is successful
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then prints the message
db.once('open',function(){
    console.log("successfully connected to db");
});