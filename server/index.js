const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')
const path = require('path')
const router = require('./routes/index')

const PORT = config.get('PORT')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        mongoose.connect(config.get("dbURL"), 
        {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e.message)
    }
}

start()


