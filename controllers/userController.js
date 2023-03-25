const { User, Thought } = require('../models');

module.exports = {
    // * `GET` all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // * `GET` a single user by its `_id` and populated thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            // The versionKey is a property set on each document when first created by Mongoose. 
            // This keys value contains the internal revision of the document. 
            // The name of this document property is configurable. The default is __v.
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // * `POST` a new user:
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // * `DELETE` to remove user by its `_id`
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID!' })

                    // **BONUS**: Remove a user's associated thoughts when deleted.
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // * `PUT` to update a user by its `_id`
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // * `POST` to add a new friend to a user's friend list
    addFriend(req, res) {
        console.log('You are adding a new friend.');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // * `DELETE` to remove a friend from a user's friend list
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user with that ID!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};

