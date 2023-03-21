const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); // self-referencing; split out to own Schema

// Schema to create a Thought model
const thoughtSchema = new Schema (

);

// **Thought**:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// ---

const Thought = model('thought', thoughtSchema);

module.exports = Thought;