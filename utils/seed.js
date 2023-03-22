const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUserName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = getRandomThoughts(10);

    for (let i = 0; i < 20; i++) {
        const userName = getRandomUserName();

        users.push({
            userName,
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // loop through the saved thoughts, for each thought we need to 
    // generate a thought reaction and insert the thought reactions
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});