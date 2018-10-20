require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const app = express()
const massive = require('massive')
const port = 5001;
const {getHouses, addProperty} = require('./controller')


app.use(json())

massive(process.env.DATABASE_STRING)
.then(db => {app.set('db', db)})
.catch(err => console.log(err))


app.get('/api/houses', getHouses)
app.delete('/api/houses/:id',)
app.post('/api/houses', addProperty)


app.listen({port}, ()=> 
    console.log(`listening on port ${port}`))
    