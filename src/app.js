const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connection to db
/*mongoose.connect("mongodb+srv://admin:admin@cluster0.rtior.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true},(req, res) => {
    console.log('Base de datos conectada');
});*/

/*mongoose.connect('mongodb://localhost/crud')
.then(db => console.log('db connected'))
.catch(err => console.log(err));*/

mongoose.connect('mongodb+srv://admin:admin@cluster0.rtior.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('db connected'))
.catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
