import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/Notes'; 
//აქ ზემოთ გადავცემთ Notes ბაზის სახელს 

const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
});

const Note = mongoose.model('Note', noteSchema);

//ეს ზემოთ არის connection ის სახელი*/  

mongoose
.connect(url)
.then((result) => {
    console.log('connected')

    return Note.find({important: true});
})
.then((result) => {
    console.log("note Found");
    result.forEach(note => {
        console.log(note)
    })
    return mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
})

