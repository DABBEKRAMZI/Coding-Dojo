const Author = require('../controllers/author.controller')

module.exports = (app)=> {
    app.get('/api/authors', Author.findAllAuthors)
    app.post('/api/authors', Author.create)
    app.get('/api/authors/:id', Author.findAuthorById)
    app.put('/api/authors/:id', Author.updateOneAuthor)
    app.delete('/api/authors/:id', Author.deleteOneAuthor)
}