const mongoose  = require('mongoose');
require('dotenv').config()
const db = process.env.db
const username = process.env.username
const password = process.env.password
 
const uri = `mongodb+srv://root:root@cluster0.ezutmup.mongodb.net/first_db?retryWrites=true&w=majority`
 
mongoose.connect(uri)
.then(() => console.log( `CONNECTION WITH DATABASE :  ${db} ESTABLISHED WITH SUCCESS`))
.catch(error => console.log("CONNECTION WITH DATABASE FAILED", error))