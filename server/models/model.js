const {Schema, model} = require('mongoose');

const AggDaily = new Schema(
    {
        ad_name: { type: String },
        total_revs: { type: Number},
        total_spend: { type: Number},
        total_profit: { type: Number},
        total_sessions: { type: Number},
        total_paid_clicks: { type: Number},
        total_page_views: { type: Number},
        cpc: { type: Number},
        roas: { type: Number},
        image_url: { type: String},
        status: { type: String}
    },
    { collection: 'agg_daily' }
    // { timestamps: true },
)
module.exports = model('agg_daily', AggDaily)