const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose
    .connect("mongodb://localhost/playground", { useNewUrlParser: true })
    .then(() => {
      console.log("Connnected to mongodb");
    })
    .catch(error => console.log(error));
}

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular JS",
    author: "Santosh",
    tags: ["angular", "js"],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

// async iffi
(async function() {
  await connectToDB();
  await createCourse();
  mongoose.connection.close();
})();
