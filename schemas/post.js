const mongoose = require("mongoose")

const postschema = new mongoose.Schema({
    post_id:{
        type: Number,
        require: true,
        unique: true
    },
    post_name:{
        type: String,
        require: true
    },
    post_content:{
        type: String
    },
    post_pw:{
        type: Number,
        require: true
    },
    post_created_at: {
        type: Date,
        // require: true
        default: Date.now
    },
    post_user: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('post', postschema)