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

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.status(201).json({ data: newAuthor, message: "New Author created successfully", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => {
            console.log("Author To Update", updatedAuthor);
            res.status(200).json({ data: updatedAuthor, message: 'Author Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}      

module.exports.deleteOneAuthor = (req,res) => {
    Author.findByIdAndDelete({_id: req.params.id})
    .then(deletedAuthor => {
        console.log("deleted  Author", deletedAuthor);
        res.status(200).json({ data: deletedAuthor, message: 'Author deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}