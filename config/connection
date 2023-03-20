const mongoose = require('mongoose');

// Wrap mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/isocialDB',{
    
    // Note that if you specify useNewUrlParser: true, you must specify a port in your connection string, like mongodb://localhost:27017/dbname.
    // The new url parser does not support connection strings that do not have a port, like mongodb://localhost/dbname.
    useNewUrlParser: true,
    
    // False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. 
    // You should set this option to true, except for the unlikely case that it prevents you from maintaining a stable connection.
    useUnifiedTopology: true, 
})

// Export the connection
module.exports = mongoose.connection;