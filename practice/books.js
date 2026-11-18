import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "Things Fall Apart", author: "Chinua Achebe" },
    { id: 2, title: "Homegoing", author: "Yaa Gyasi" },
    { id: 3, title: "Arrow of God", author: "Chinua Achebe" },
];

let nextId = 4; // gives each new book a fresh id

    // Model: GET all in server.js. Use req.query.author for the challenge.
app.get("/books", (req, res) => {
    const { search, author } = req.query;
    if (search) {
        const matches = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
        res.json(matches);
    }
    if (author) {
        const matches = books.filter((book) => book.author === author);
        res.json(matches);
    }
    res.json(books);
});


    // Model: Get one
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find((b) => b.id === id);
    if (!book) {
        res.status(404).json({ error: "Book not found" });
        return;
    }
    res.json(book);
});


    // Model: POST in server.js, but validate two fields: title and author.
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        res.status(400).json({ error: "Title and author are required" });
        return;
    }
    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});



app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })