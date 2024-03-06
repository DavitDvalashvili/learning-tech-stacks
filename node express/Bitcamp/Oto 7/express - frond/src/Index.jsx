import axios from "axios";

(async () => {
  const getNotes = async () => {
    const response = await axios.get("http://localhost:3002/notes");
    return response.data;
  };

  const root = document.getElementById("root");
  let notes = await getNotes();

  const renderNotes = async (notes) => {
    const noteListString = `
    <ul>
     ${notes
       .map(
         (note) =>
           `<li data-note-id='${note.id}'>${note.content} <button>important: ${note.important}</button></li>`
       )
       .join("")}
    </ul>
    `;
    root.innerHTML = noteListString;
  };
  renderNotes(notes);

  root.addEventListener("click", async (event) => {
    const noteId = event.target.parentNode.getAttribute("data-note-id");

    const noteTobeChanged = notes.find((note) => note.id == noteId);
    //console.log(noteTobeChanged)

    const noteToSend = {
      ...noteTobeChanged,
      important: !noteTobeChanged.important,
    };
    const response = await axios.put(
      `http://localhost:3002/notes/${noteId}`,
      noteToSend
    );
    const noteUpdated = response.data;

    notes = notes.map((note) => {
      if (note.id == noteUpdated.id) {
        return noteUpdated;
      }

      return note;
    });

    renderNotes(notes);
  });

  const form = document.getElementById("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = document.getElementById("content").value;

    const newNote = {
      content: formData,
      date: Date(),
      important: true,
    };

    const response = await axios.post("http://localhost:3002/notes", newNote);
    const updateNote = response.data;
    notes.push(updateNote);
    renderNotes(notes);
  });
})();
