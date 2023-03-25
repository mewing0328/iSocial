const { Schema, Types } = require('mongoose');
const moment = require('moment');

// // example data
// {
//     "reactionBody": "I like this thought...",
//     "username": "pmark124",
//     "thoughtId": "9edff358a0fcb779aa7b112c"
// }

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('YYYY-MM-DD'),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;