// Add data for seeding.js

const userNames = [
    'mewing0328',
    ``,
];

const thoughtTextBodies = [
    'There was a time when life was simple without technology',
    'No need for permission, apologize later',
    'If you want to learn, look at what someone successful did in the past',
];

const possibleReactions = [
    'I disagree!',
    'This was awesome',
];

const users = [];

// Get a random item given an array
const randomize = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUserName = () =>
    `${randomize(userNames)}`;

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: randomize(thoughtTextBodies),
            username: getRandomUserName(),
            reactions: [...getThoughtReactions(3)],
        });
    }
    return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
    if (int === 1) {
        return randomize(possibleResponses);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: randomize(possibleReactions),
            username: getRandomUserName(),
        });
    }
    return results;
};

// Export the functions for use in seed.js
// You do not need to export getThoughtReactions because it is in the getRandomThoughts function
module.exports = { getRandomUserName, getRandomThoughts };