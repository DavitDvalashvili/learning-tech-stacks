import express from "express"
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/Notes'; 
//აქ ზემოთ გადავცემთ Notes ბაზის სახელს 

const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
});

const Note = mongoose.model('Note', noteSchema);


mongoose.connect(url);

// app.get('/', async (req, res) => {
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('notes');

//     collection.insertMany(notes).then(() => {
//         console.log("Notes inserted to the database")
//     });

//     res.send("I am a home page");
// })

app.get('/notes', async (req, res) => {
    
    const notes = await Note.find({});
    res.send(notes);
})


app.post('/notes', async (req, res) => {
    const newNote = req.body;
    const note = new Note(newNote);
    note.save().then((note) => {
        console.log("Saved")
        res.send(note)
    })
})

app.get('/notes/:noteID', async(req, res) => {
    const noteID = req.params.noteID;
    const note = await Note.findById(noteID);
    res.send(note);
})

app.put('/notes/:noteID', async(req, res) => {
    //const updateNote = req.body;
    const updatedNote =  await Note.updateOne({_id: req.params.noteID}, req.body)
    res.send(await Note.findById(req.params.noteID));
})


app.listen(3000, () => {
    console.log("Express server started on the port 3002")
} )


