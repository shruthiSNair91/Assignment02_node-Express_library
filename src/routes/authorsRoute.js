const express = require('express');
const authorsRouter=express.Router();
function router(nav)
{
    var authors=[
        {
            name:'Sudha Murthy',
            genre: "children's book to contemporary fiction",
            img:'author1_Sudha_murthy.jpeg',
            desc:"Sudha Murthy is the face of modern Indian children's literature in all aspects. Her writing style is simple, yet prfound. Murthy’s fictions have a way with feelings and hit the spot in the most uncanny manner.She is a gifted children’s book author and also an accomplished author of brilliant contemporay fiction. Some of her well known works include 'The Serpent’s Revenge', “Wise and Otherwise”, “Three Thousand Stitches”, 'Dollar Bahu', etc"
        },
        {
            name:'Stephen R. Donaldson',
            genre: "science fiction to mystery novels",
            img:'Athr2_Stephen.jpeg',
            desc:"Donaldson's science fiction novels are intricate and wonderful. His mystery novels have done equally well and he has produced some of them with ease right after celebrating his first success with the 'Covenant' series. Had it not been for his publishers, he would have published the mystery novel batch without a pseudonym. But as fate had it, he was coaxed into believing in his fears back then. Nevertheless, his mystery novels did pretty well and his fans gracefully accepted him in both his personas."
        },
        {
            name:'William Shakespeare',
            genre: "Greatest dramatist",
            img:'Athr3_william-shakespeare.jpg',
            desc:"William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the 'Bard of Avon'"
        },
        {
            name:'J.K. Rowling',
            genre: " fantasy to mystery novels",
            img:'Athr4_JkRowling.jpeg',
            desc:"Like every other author, Rowling was sceptical about making it big after a genre change. The author, known in every nook and corner of the world for her children's fantasy series Harry Potter, was apparently secretive of her debut as a contemporary crime writer. She took to a pseudonym Robert Galbraith for writing the Cormoran Strike books. All was going well until a tweet by one of her fans revealed that Rowling was, in fact, the Robert Galbraith we know. Despite all the controversies around 'The Cuckoo's Calling', it received a roaring success and was listed by Amazon among the best sellers. But Rowling had also tried her hand at literary fiction with her first book after Harry Potter titled, 'The Casual Vacancy'."
        }
    ];
    authorsRouter.get('/', (req,res)=>{
    res.render('authors',
                {    
                    nav,
                    authors
                });
            });
    
    authorsRouter.get('/:id', (req,res)=>{
                    const id= req.params.id;
                    res.render('SingleAuthor',
                    {
                        nav,
                        aid:authors[id]  
                    });
        });

        return authorsRouter;
    }


module.exports=router;