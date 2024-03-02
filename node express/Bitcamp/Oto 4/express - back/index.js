import express from "express"
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
import { MongoClient, ObjectId} from "mongodb";


const client = new MongoClient('mongodb://localhost:27017');
const dbName = "Notes";

app.get('/', async (req, res) => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('notes');

    collection.insertMany(notes).then(() => {
        console.log("Notes inserted to the database")
    });

    res.send("I am a home page");
})

app.get('/notes', async (req, res) => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('notes');

    const notes = await collection.find().toArray();

    res.send(notes);
})

// app.get('/notes/:noteId', (req, res) => {
//     const noteId = req.params.noteId;
//     const note = notes.find((note) => {
//         return note.id === Number(noteId)
//     })
//     res.send(note);
// })

app.post('/notes', async (req, res) => {
    const newNote = req.body;

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('notes');

    collection.insertOne(newNote).then(() => {
        console.log("added new note");

        res.send(newNote);
    })

    //გარეთაც შეიძება იყოს თუ არ დაგვინდა დაველოდოთ შედეგს
    //res.send(newNote);
})

app.get('/notes/:noteID', async(req, res) => {
    const noteID = req.params.noteID;
    
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('notes');

    const result = collection.findOne({_id: ObjectId.toString(noteID)});

    res.send(result)
})

app.put('/notes/:noteID', async(req, res) => {
    const updateNote = req.body;
    console.log(updateNote);

    
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('notes');

    collection
    .updateOne({content: updateNote.content}, {$set: {important: updateNote.important}})
    .then(console.log(`updated note ${updateNote._id} `))
    res.send(updateNote)
})


app.listen(3002, () => {
    console.log("Express server started on the port 3002")
} )


/*******************with node*********************/

// import http from "http"

// const app = http.createServer((request, response) => {
//   //console.log(request.url);
//   response.writeHead(200, { 'Content-Type': 'text/plain' })

  
//   const urlSplit = request.url.split("/");

//   if(urlSplit[1] === "notes" && urlSplit[2] !== undefined) {

//     const noteID = urlSplit[2];
//     if(!isNaN(noteID)) {
//         console.log(noteID);
//         response.write(`I am noteID ${noteID}`)
//     } else {
//         console.log("value is note numeric")
//     }
//     response.end("");
    
//   }


// })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`);


//with express
