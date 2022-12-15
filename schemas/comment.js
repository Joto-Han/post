const mongoose = require("mongoose")

const commentschema = new mongoose.Schema({
    post_id:{
        type: Number,
        require: true,
    },
    comment_content:{
        type: String
    },
    comment_user: {
        type: String,
        require: true
    },
    comment_pw : {
        type: Number,
        require: true
    },
    comment_created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('comment', commentschema)