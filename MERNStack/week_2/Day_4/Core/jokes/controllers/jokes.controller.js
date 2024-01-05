const Joke=require('../models/jokes.model')
console.log(Joke);

// get all Jokes
module.exports.findlAllJokes=(req,res)=>{
    Joke.find()
        .then(allJokes=>{console.log("All Jokes From DB", allJokes);
        res.status(200).json({ data: allJokes, message: 'All Jokes List', ok: true })
        })
        .catch(error=>{
            console.log(error);
            res.status(404).json({error})
        })
}

// get one jok by id
module.exports.findOneJokeById=(req,res)=>{
    Joke.findById({ _id: req.params.id })
        .then(oneJoke=>{
            console.log("Joke Found", oneJoke);
            if(!oneJoke) {
                res.status(404).json({ error:"Joke Not Found", ok:false })
            }else{
                res.status(200).json({ data: oneJoke, message: 'Joke Found', ok: true })
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error})
        })

}

// create one Joke 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newCreatedJoke => {
            console.log("New  Movie", newCreatedJoke);
            res.status(201).json({ data: newCreatedJoke, message: 'Joke Created with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}

// update one Joke with id
module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body,  {new:true, runValidators:true})
        .then(updateJoke => {
            console.log("Movie To Update", updateJoke);
            res.status(200).json({ data: updateJoke, message: 'Joke Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}


// delete one Joke with id
module.exports.deleteOneJoke = (req,res) => {
    Joke.findByIdAndDelete({_id: req.params.id})
    .then(deletedJoke => {
        console.log("Deleted Movie", deletedJoke);
        res.status(200).json({ data: deletedJoke, message: 'Movie deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}