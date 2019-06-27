const mongoose = require('mongoose');
// console.log(mongoose);

const db = mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true})
.then(() => { 
    console.log('Connnected to mongodb');
    console.log('Closing db connection.');
    mongoose.connection.close();
})
.catch(error => console.log(error));

