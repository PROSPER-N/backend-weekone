import express from "express"

const app = express();

const PORT = 5000;


//route params
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({message: `You asked for user ${id}`, type: typeof id})
})

//search or query 
app.get("/search", (req, res) => {
    const { q, limit } = req.query;

    res.json({searchTerm: q, limit: limit})
})




app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })