import express from 'express';

const app = express();

const PORT = 5000;

app.use(express.json());

let notes = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Finish assignment" }
];

let nextId = 3; // gives each new note a fresh id

app.get("/", (req, res) => {
    res.send("Notes API is running. Try GET /notes");
});



app.get("/notes", (req, res) => {
    const { search } = req.query;

    if (search) {
        const matches = notes.filter((note) => note.text.toLowerCase().includes(search.toLowerCase())
        );
        res.json(matches);
    }
    res.json(notes);
});


app.get("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
});


app.post("/notes", (req, res) => { 
    const { text } = req.body ||  {};

    if (typeof text !== "string" || text.trim() === "") {
        return res.status(400).json({ error: "Text is required" });
    }

    const newNote = { id: nextId, text: text.trim() };
    nextId = nextId + 1;
    notes.push(newNote);

    res.status(201).json(newNote);
});


app.put("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    const { text } = req.body || {};

    if (typeof text !== "string" || text.trim() === "") {
        return res.status(400).json({ error: "Text is required" });
    }

    note.text = text.trim();
    res.json(note);
});


app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const exists = notes.some((n) => n.id === id);

    if (!exists) {
        return res.status(404).json({ error: "Note not found" });
    }

    notes = notes.filter((n) => n.id !== id);
    res.status(204).send();
});




app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })