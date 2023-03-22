const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const reactionSchema = require('./Reaction'); // self-referencing; split out to own Schema

// Schema to create a Thought model
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            required: true, 
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date, 
            // default: Date.now,
            // get: (date) => {
            //     if (date) return date.toISOString().split("T") [0];
            // },
            timestamps: {
                currentTime: () => Math.floor(Date.now() / 1000)
            },
        },
        // * `username` (The user that created this thought)
        //   * String
        //   * Required
        // NOT SURE about below
        username: {
            type: String, 
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema
    .virtual('reactionCount')
    // Get function for this Thought's reaction length number
    .get(function() {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;