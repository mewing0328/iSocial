// Add data for seeding.js

const userNames = [
    'mewing0328',
    `bob123`,
];

const emails = [
    'mewing0328@gmail.com',
    `bob123@hotmail.com`,
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


// Get a random item given an array
const randomize = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random users
const getRandomUserName = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        const userName = randomize(userNames);
        const email = `${userName}@seed.com`;

        results.push({
            userName,
            email,
            thoughts: randomize(thoughtTextBodies),
            friends: [...getUserFriends(3)],
        })
    }
};

// Create the reactions that will be added to each thought
const getUserFriends = (int) => {
    if (int === 1) {
        return randomize(userNames);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            username: getRandomUserName(),
        });
    }
    return results;
};

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
module.exports = { getRandomUserName, getRandomThoughts, getThoughtReactions };