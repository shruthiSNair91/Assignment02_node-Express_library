const express = require('express');

const bookRouter=express.Router();
function router(nav)
{
    var books=[
        {
            title:'Believe In Yourself',
            author:'Joseph Murphy',
            genre:'Self-Help',
            img:'believe_in_urself.jpeg'
        },
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Comic-Cartoon',
            img:'tom.jpeg'
        },
        {
            title:'Wings of Fire ',
            author:'A P J Abdul Kalam',
            genre:'Biograpghy',
            img:'apj.jpeg'
        },
        {
            title:'War and Peace ',
            author:'Leo Tolstoy',
            genre:'Novel',
            img:'war&peace.jpg'
        }
    
    ];
    bookRouter.get('/',(req,res)=>{
        res.render('books',{
                        nav,
                        title:'Library',
                        books
                    });
        });
    bookRouter.get('/:id',(req,res)=>{
                const id=req.params.id;
                res.render('SingleBook',{
                        nav,
                        book:books[id]
            });
    });
    
    return bookRouter;
}

module.exports=router;