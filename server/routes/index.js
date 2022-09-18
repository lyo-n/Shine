const Router = require('express')
const router = new Router()
const aggRouter = require('./aggRouter')

router.use('/agg', aggRouter)


module.exports = router