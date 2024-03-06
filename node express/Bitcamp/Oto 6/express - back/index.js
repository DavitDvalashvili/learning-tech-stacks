import express from "express"
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

import dotenv from 'dotenv';
dotenv.config();

import Note from './Note.js';


app.get('/notes', async (req, res) => {
    
    const notes = await Note.find({});
    res.send(notes);
})


app.post('/notes', async (req, res) => {

    if (req.body.content === undefined)  {
        return response.status(400).json({ error: 'content missing' })
    }


    const newNote = req.body;
    const note = new Note(newNote);
    note.save().then((note) => {
        console.log("Saved")
        res.send(note)
    })
})

app.get('/notes/:noteID', async(req, res) => {
    try{
        const noteID = req.params.noteID;
        const note = await Note.findById(noteID);
        console.log(note)
        res.send(note);
    } catch (error) {
        console.log(error);
        res.status(404).json({error: "404 not found"})
    }
})

app.put('/notes/:noteID', async(req, res) => {
    //const updateNote = req.body;
    const updatedNote =  await Note.updateOne({_id: req.params.noteID}, req.body)
    res.send(await Note.findById(req.params.noteID));
})


// app.listen(3002, () => {
//     console.log("Express server started on the port 3002")
// } )

app.listen(process.env.PORT, () => {
    console.log(`Express server started on the port ${process.env.PORT}`)
} )

