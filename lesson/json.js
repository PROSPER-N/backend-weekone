import express from "express"

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("try visting /users or /about , Go to /menu for food list")
})

app.get("/users", (req, res) => {
    res.json([
        {id: 1, name: "Ama"},
        {id: 2, name: "Kojo"}
    ]);
});


app.get("/about", (req, res) => {
    res.json({school: "Codetrain African", course: "Node.js & Express", week: 1})
});

app.get("/menu", (req, res) => {
    res.json([
        {id: 1, name: "Waakye", price: 25},
        {id: 2, name: "Jollof", price: 40},
        {id: 3, name: "Banku & Talapia", price: 60}
    ]);
});





app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })