const AggDailyModel = require('../models/model')





class AggDailyController {
    async create (req, res, next) {
        try {
            let {ad_name, total_revs, total_spend, total_profit, total_sessions, total_paid_clicks, total_page_views, cpc, roas, image_url, status} = req.body         
            
            const item = await AggDailyModel.create({ad_name, total_revs, total_spend, total_profit, total_sessions, total_paid_clicks, total_page_views, cpc, roas, image_url, status});
            return res.json(item)
        } catch (e) {
            console.log(e)
            next(e.message)
        }    
    }


    async getAll (req, res, next) {
        try {
            let items;
            items = await AggDailyModel.find()
            return res.json(items)
        } catch (e) {
            console.log(e)
            next(e.message)
        }
    }
}



module.exports = new AggDailyController()