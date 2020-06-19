const express = require('express');

const app = new express();

const nav=[
    {link:'/books',name:'Books'},
    {link:'/author',name:'Authors'},
    {link:'/addBook',name:'Add Book'},
    {link:'/signin',name:'Sign In'},
    {link:'/signup',name:'Sign Up'}
];

const bookRouter=require('./src/routes/booksRoute')(nav);
const authorsRouter=require('./src/routes/authorsRoute')(nav);
const signRouter=require('./src/routes/signinRoute')(nav);
const signupRouter=require('./src/routes/signupRoute')(nav);

app.use (express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',bookRouter);
app.use('/author',authorsRouter);
app.use('/signin',signRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render('index',
                {nav,
                 title:'Library'});
});


app.listen(7000);
console.log("Server ready at port : 7000");