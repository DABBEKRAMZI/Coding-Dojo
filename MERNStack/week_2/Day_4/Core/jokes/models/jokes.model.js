const mongoose=require('mongoose')

const jokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true,'Setup is required!']
    },
    punchline:{
        type:String,
        required:[true,'punchline is required!']
    }
},{timestamps:true})

const Joke=mongoose.model("joke",jokeSchema)
module.exports =Joke