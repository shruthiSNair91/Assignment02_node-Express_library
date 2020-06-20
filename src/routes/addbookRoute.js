const express = require('express');
const addbookRouter=express.Router();

function router(nav)
{
    addbookRouter.get('/',(req,res)=>{
        res.render('addBook',
        {
            nav
        });
    });
    addbookRouter.get('/:single',(req,res)=>{
        const id=req.params.single;
        // res.render('addbook',{nav});
        res.send("Book item added successfully..");
});

    return addbookRouter;
}

module.exports=router;