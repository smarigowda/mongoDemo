const mongoose = require('mongoose');

async function connectToDB() {
    await mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => { 
        console.log('Connnected to mongodb');
    })
    .catch(error => console.log(error));
}


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

const course = new Course({
    name: 'React JS',
    author: 'Santosh',
    tags: ['node', 'backend'],
    isPublished: true,
});

// async iffi
(async function() {
    await connectToDB();
    const result = await course.save();
    console.log(result);
    mongoose.connection.close();
})();

