import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Note from "./Models/Note.js";
import * as logger from "./Utils/logger.js"

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();


import notesRouter from "./controller/Notes.js";
import usersRouter from "./controller/Users.js";

app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter)


// app.listen(3002, () => {
//     console.log("Express server started on the port 3002")
// } )

app.listen(process.env.PORT, () => {
  logger.error(`Express server started on the port ${process.env.PORT}`);
});

export default app;
