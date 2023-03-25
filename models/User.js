const { Schema, model } = require('mongoose');

// // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
// }

// Schema to create User model
const userSchema = new Schema (
    {
        userName: {
            type: String,
            unique: true, // Unique index. If you specify `unique: true`
            required: true, // boolean or function, if true adds a required validator for this property
            trim: true, // boolean, whether to always call .trim() on the value
        },
        email: {
            type: String, 
            required: true, 
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valid email address.'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'Thought',
            },
        ],
        // * Array of `_id` values referencing the `User` model (self-reference)
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true, 
        },
        id: false,
    }
);

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema
    .virtual('friendCount')
    // Get function for this User's friends length number
    .get(function() {
        return this.friends.length;
    });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

