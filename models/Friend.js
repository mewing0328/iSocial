const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
    {
        friendId: {
            type: Schema.Types.ObjectId(),
            default: () => new Types.ObjectId(),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = friendSchema;