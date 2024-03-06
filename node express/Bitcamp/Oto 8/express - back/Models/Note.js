import mongoose from "mongoose";
import dotenv from 'dotenv';
import * as logger from "../Utils/logger.js"

dotenv.config();

//const url = 'mongodb://localhost:27017/Notes'; 
// ეს ქვედა იგივეა რაც ზედა, ცალეკ გავიტანეთ როგორ ენვ ვარიაბლე და დაგვწირდა ინსტალცია პეკიჩის npm install dotenv
const url = process.env.MONGODB_URI


mongoose.connect(url)
.then(result => {
    logger.info("Connected to MongoDB")
})
.catch ((error) => {
    logger.error('Error connecting to mongo DB', )
});

const noteSchema = mongoose.Schema({
    content: {
        type: String,
        minLength: 5,
        required: true,
    },
    important: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

noteSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    }
})

export default mongoose.model('Note', noteSchema);


