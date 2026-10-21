import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world my first Express server is alive.");
})


app.get("/me", (req, res) => {
    res.send("<h1>Hi, I'm Prosper and I'm learning Express.</h1>");
})

app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })
