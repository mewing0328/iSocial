# iSocial
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
The back end of a social network application with a working Express.js API to use Mongoose to interact with MongoDB database to demonstrate CRUD. Insomnia application was utilized to demo the routes.

## Table of Contents
[1. Installation](#installation)

[2. Usage](#usage)

[3. Demo](#demo)

[4. Screenshots](#screenshots)

[5. Contributing](#contributing)

[6. Questions](#questions)

[7. License](#license)

[8. Credits](#credits)


## Installation 
The application has dependencies (see package.json file). Before using the application, install npm modules.

```bash
npm install
```

## Usage 
The application will be invoked by using the following command:

```bash
node index.js OR npm start
```
```
The social network application enables a user to:
- invoke the application THEN my server is started and the Mongoose models are synced to the MongoDB database
- open API GET routes in Insomnia for users and thoughts THEN the data for each of these routes is displayed in a formatted JSON
- test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete users and thoughts in my database
- test API POST and DELETE routes in Insomnia THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

## Demo
[Link for demo video](https://watch.screencastify.com/v/FVim1VG9GLZwrKxxwrzO) (Length of video: 9 minutes and 42 seconds)

The video is also within the assets folder in this repository.
```
A walkthrough video demonstrates: 
- the functionality of the iSocial back end
- how to seed the database from the command line
- how to start the application’s server
- tests in Insomia for: 
    - Users: POST, GET all & single, PUT, and DELETE (full CRUD)
        - Friends: POST, DELETE (CD)
    - Thoughts: POST, GET all & single, PUT, and DELETE (full CRUD)
        - Reactions: POST, DELETE (CD)

```

 ## Screenshots 

1. Shows GET routes to return all users and all thoughts being tested in Insomnia:

    <img src="./assets/getAllUsers.png" style="width:15rem">
    <img src="./assets/getAllThoughts.png" style="width:15rem">


2. Shows GET routes to return a single user and a single thought being tested in Insomnia:

    <img src="./assets/getSingleUsers.png" style="width:15rem">
    <img src="./assets/getSingleThought.png" style="width:15rem">

3. Shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

    <img src="./assets/postUser.png" style="width:15rem">
    <img src="./assets/putUser.png" style="width:15rem">
    <img src="./assets/deleteUser.png" style="width:15rem">

4. Shows the POST, PUT, and DELETE routes for thoughts being tested in Insomnia:

    <img src="./assets/postThought.png" style="width:15rem">
    <img src="./assets/putThought.png" style="width:15rem">
    <img src="./assets/deleteThought.png" style="width:15rem">

5. Shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

    <img src="./assets/postFriend.png" style="width:15rem">
    <img src="./assets/deleteFriend.png" style="width:15rem">

6. Show the POST and DELETE routes for reactions to thoughts being tested in Insomnia:

    <img src="./assets/putReaction.png" style="width:15rem">
    <img src="./assets/deleteReaction.png" style="width:15rem">

## Contributing 
Contributions are welcomed for future versions with features such as additional enhancements.

For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.

## Questions
Interested in seeing my other work?

Check out my GitHub account: [mewing0328](https://github.com/mewing0328).

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).

## License 
iSocial application is covered by MIT license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Credits
Credit for tutorials and guides I utilized in my code

George Washington University - Coding Bootcamp: Repository Lesson 18-NoSQL

[npm](https://docs.npmjs.com/creating-a-package-json-file): How to create a package.json file.

[npm](https://remarkablemark.org/blog/2021/08/28/how-to-create-npm-package-lockfile/): How to create a package-lock.json

[mongoose documentation](https://mongoosejs.com/docs/schematypes.html)

[MongoDB documentation](https://www.mongodb.com/docs/v6.0/core/schema-validation/)

[email validation for Schema](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax)

[Format Date](https://www.appsloveworld.com/mongodb/100/220/how-to-use-getter-or-setter-with-mongoose-timestamps)

[Format Timestamps](https://masteringjs.io/tutorials/mongoose/timestamps)

[MOMENT - utilize for fomatting DATE](https://www.sitepoint.com/managing-dates-times-using-moment-js/#:~:text=format('YYYY%2DMM%2D,and%20a%20two%2Ddigit%20day.))

[100 random thoughts](https://ponly.com/random-thoughts/)













