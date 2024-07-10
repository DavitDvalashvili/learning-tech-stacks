import express from "express";
import Note from "../Models/Note.js";

const notesRouter = express.Router();

notesRouter.get("/", async (req, res) => {
  const notes = await Note.find({});
  res.send(notes);
});

notesRouter.post("/", async (req, res) => {
  if (req.body.content === undefined) {
    return res.status(400).json({ error: "content missing" });
  }

  const newNote = req.body;
  const note = new Note(newNote);
  note
    .save()
    .then((note) => {
      // console.log('Saved');
      res.send(note);
    })
    .catch((reason) => {
      res.status(400).send(reason);
    });
});

notesRouter.get("/:noteID", async (req, res) => {
  try {
    const noteID = req.params.noteID;
    const note = await Note.findById(noteID);
    logger.info(note);
    //igive rac consle.log
    res.send(note);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "404 not found" });
  }
});

notesRouter.put("/notes/:noteID", async (req, res) => {
  //const updateNote = req.body;
  const updatedNote = await Note.updateOne(
    { _id: req.params.noteID },
    req.body
  );
  res.send(await Note.findById(req.params.noteID));
});

export default notesRouter;