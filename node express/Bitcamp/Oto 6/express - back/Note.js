import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

//const url = 'mongodb://localhost:27017/Notes'; 
// ეს ქვედა იგივეა რაც ზედა, ცალეკ გავიტანეთ როგორ ენვ ვარიაბლე და დაგვწირდა ინსტალცია პეკიჩის npm install dotenv
const url = process.env.MONGODB_URI


mongoose.connect(url)
.then(result => {
    console.log("Connected to MongoDB")
})
.catch ((error) => {
    console.log('Error connecting to mongo DB', )
});

const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
});

noteSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    }
})

export default mongoose.model('Note', noteSchema);


