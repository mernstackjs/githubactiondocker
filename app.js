import express from "express";

const app = express();

app.get("/", (req, res) => res.send("API is running seccessfully"));
app.get("/test", (req, res) => res.json({ user: "ahmed" }));
const port = 9900;
app.listen(port, () => console.log(`server is running on port ${port}`));
