const Author = require('../models/authors.model');

// get all authors
module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors=>{
        console.log("all Authors",allAuthors);
        res.status(200).json({data:allAuthors,message:'all Authors list',ok:true})
    })
    .catch(error=>{
        console.log(error);
        res.status(404).json({error})
    })
}

module.exports.findAuthorById=(req,res)=>{
    Author.findById({_id:req.params.id})
    .then(author=>{
        console.log('author found',author);
        res.status(200).json({data:author,message:'author found', ok:true})
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({error})
    })
}

