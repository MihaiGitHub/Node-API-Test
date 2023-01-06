import express from "express";
import agentsRouter from "./routers/agents";
//const agentsRouter = require("./routers/agents");
const app = express();

// Automatically parse data as a JSON object in all request handlers
app.use(express.json());

//app.use(propertiesRouter);
app.use(agentsRouter);

app.listen(5001, () => console.log("Api running on port 5001"));

app.get("/", (req, res) => res.json("My API running! 7778"));
