import express from "express";

const app = express();

const PORT = 5000;

app.use(express.json());

const users = [
    { id: 1, name: "Ama" },
    { id: 2, name: "Kojo" }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log("Received:", newUser);


    if (!newUser || !newUser.name) {
        return res.status(400).json({ error: "Name is required" });
    }

    users.push(newUser);
    res.status(201).json(newUser);
})


app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })