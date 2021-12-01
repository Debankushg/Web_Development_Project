const express = require("express");
const path = require("path");
const app = express();

const mongoose = require('mongoose');
const bodyparser =require('body-parser');
mongoose.connect('mongodb://localhost:27017/dance',{useNewUrlParser:true , useUnifiedTopology: true})
// .then(() => console.log("connection successful"))
// .catch((err) => console.log(err));
const port = 80;

// Define Mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    Email: String,
   Address : String,
    desc : String
});

var contact = mongoose.model('contact' , contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
// app.post('/contact', (req, res)=>{
//     var myData = new contact(req.body);
//     myData.save().then(() =>{
//         res.send("This item is saved to database")
//     }).catch(() => {
//         res.status(400).send("Item was not saved to the database")
//     })

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the databse")
    })

    // res.status(200).render('contact.pug');
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});