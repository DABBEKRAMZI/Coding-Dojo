const {findlAllProductManagers,findOneProductManagerById,createNewProductManager,updateOneProductManager,deleteOneProductManager}= require('../controllers/product_manager.controller')

module.exports =(app)=>{
    app.get('/api/products', findlAllProductManagers)
    app.post('/api/products', createNewProductManager)
    app.get('/api/products/:id', findOneProductManagerById)
    app.put('/api/products/:id', updateOneProductManager)
    app.delete('/api/products/:id', deleteOneProductManager)
}