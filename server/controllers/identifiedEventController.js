const {IdentifiedEvent} = require('../models/models')
const ApiError = require('../error/ApiError')


class IdentifiedEventController{
    async create(req, res, next){
        try {
            const {description, date, status, level_of_risk, location_id, event_id, user_id} = req.body
            const identEvent = await IdentifiedEvent.create({description, date, status, level_of_risk, location_id, event_id, user_id})
            return res.json(identEvent)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        const events = await IdentifiedEvent.findAll()
        return res.json(events)
    }
    async getOne(req, res, next){
        try {
            const {identifiedE_id} = req.params
            const event = await IdentifiedEvent.findOne(
                {
                    where: {identifiedE_id}
                },
            )
            return res.json(event)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new IdentifiedEventController()