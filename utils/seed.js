const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUserName, getRandomThoughts, getThoughtReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // -------- USERS --------
    // Drop existing users
    await User.deleteMany({});

    // Create empty array to hold the thoughts
    const users = [];

    // Loop 20 times -- add users to the users array
    for (let i = 0; i < 20; i++) {
        // Get some random friend objects using a helper in data.js
        const user = getRandomUserName(10);

        users.push({
            user,
        });
    }
    // Add users to the collection and await the results
    await User.collection.insertMany(users);

    // -------- THOUGHTS --------
    // Drop existing thoughts
    await Thought.deleteMany({});

    // Create empty array to hold the thoughts
    const thoughts = [];

    // Loop x times -- add thoughts to the thoughts array
    for (let i = 0; i < 5; i++) {
        // Get some random reaction objects using a helper function that we imported from ./data
        const reactions = getThoughtReactions(5);
        const thought = getRandomThoughts();

        thoughts.push({
            thought,
            reactions,
        });
    }
    // Add thoughts to the collection and await the results
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    // console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});