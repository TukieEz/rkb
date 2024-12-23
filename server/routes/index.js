const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const identifiedEventRouter = require('./identifiedEventRouter')

router.use('/user', userRouter)
router.use('/identified_event', identifiedEventRouter)

module.exports = router