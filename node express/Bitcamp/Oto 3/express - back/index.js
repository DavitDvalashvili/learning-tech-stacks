import express from "express"
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
        "id": 2,
        "content": "Browser can execute only JavaScript",
        "important": false
    },
    {
        "id": 3,
        "content": "Browser can execute only JavaScript",
        "important": false
    }
]


app.get('/', (req, res) => {
    res.send("hello I am a Home page")
})

app.get('/notes', (req, res) => {
    res.send(notes);
})

app.get('/notes/:noteId', (req, res) => {
    const noteId = req.params.noteId;
    const note = notes.find((note) => {
        return note.id === Number(noteId)
    })
    res.send(note);
})

app.post('/notes', (req, res) => {
    const newNote = req.body;
    const lastNoteId = notes[notes.length - 1].id;
    newNote.id = lastNoteId + 1;
    notes.push(newNote);

    console.log(notes);

    res.send(newNote);
})

app.get('/notes/:noteID/author/:authorID', (req, res) => {
    console.log(req.params)
    const noteID = req.params.noteID;
    const authorID = req.params.authorID;
    res.send(`Hello I a note ${noteID} and this is an author ${authorID}`)
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
