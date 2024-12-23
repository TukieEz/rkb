const Router = require('express')
const router = new Router()
const identifiedEventController = require('../controllers/identifiedEventController')

router.post('/', identifiedEventController.create)
router.get('/', identifiedEventController.getAll)
router.get('/:identifiedE_id', identifiedEventController.getOne)

module.exports = router