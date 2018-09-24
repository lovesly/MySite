const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ArticleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    Detial: {
        title: String,
        Introduction: String,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users',
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);