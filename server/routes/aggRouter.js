const Router = require('express')
const router = new Router()
const aggController = require('../controllers/aggDaily')

router.post('/daily', aggController.create)
router.get('/dailyAll', aggController.getAll)

module.exports = router