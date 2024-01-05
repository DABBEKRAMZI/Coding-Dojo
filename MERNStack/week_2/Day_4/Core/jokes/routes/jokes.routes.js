const {findlAllJokes,createNewJoke,updateOneJoke,findOneJokeById,deleteOneJoke}= require('../controllers/jokes.controller')

module.exports =(app)=>{
    app.get('/api/jokes', findlAllJokes)
    app.post('/api/jokes', createNewJoke)
    app.get('/api/jokes/:id', findOneJokeById)
    app.put('/api/jokes/:id', updateOneJoke)
    app.delete('/api/jokes/:id', deleteOneJoke)
}