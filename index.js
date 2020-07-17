const express = require('express');
const path = require('path');

const db = require('./config/mongoose');
const Todo = require('./models/todo');
const comp = require('./models/complete');
const { Console } = require('console');

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));
var todo = [
    {
        name: "Eat",
    }
]
// console.log('hello',comp);
app.get('/', function (req, res) {
    //converting my collection into a variable -tasks
    Todo.find({}, function (err, tasks) {
        if (err) {
            console.log('errors in fetching task from db');
            return;
        }
        return res.render('home', {
            'title': 'TODO',
            'todo': tasks,
        });
    });
    // comp.find({}, function (err, compTasks) {
    //     if (err) {
    //         console.log('errors in fetching task from db');
    //         return;
    //     }
    //     console.log(compTasks);
    //     return res.render('home', {
    //         'comp': compTasks,
    //     });
    // })

});

app.post('/createTask', function (req, res) {

    Todo.create({
        name: req.body.name,
        isDone: false,
    }, function (err, newTask) {
        if (err) {
            console.log("error in creating new task");
            return;
        }
        console.log(newTask);
        return res.redirect('/');
    });
    // console.log(req.body);
    // todo.push({
    //     name:req.body.name,
    // });
    // return res.redirect('back');
});
app.get('/delete', function (req, res) {
    Todo.findByIdAndDelete(req.query._id, function (err) {
        // comp.create({
        //     name: req.query.name,
        //     isDone: false,
        // }, function (err, compTask) {
        //     if (err) {
        //         console.log("error in creating new task");
        //         return;
        //     }
        //     console.log(compTask);
        //     return res.redirect('/');
        // });
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('back');
    });

})

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('server is running on port', port);
})