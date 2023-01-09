//import express from "express";
const express = require("express");
//import router from "./routers/agents";
//const agentsRouter = require("./routers/agents");
const app = express();

///////////////////////////////////////////
//const router = new express.Router();
const {
  //agentById, read,
  list,
  //saveMessage
} = require("./src/controllers/agent");

// middleware
// anytime there is a userId param in the route execute agentById method
//router.param("agentId", agentById);

// routes
//router.post("/agent/:agentId/message", saveMessage);
//router.get("/agent/:agentId", read);
app.get("/agents", list);
////////////////////////////////////////////////

// Automatically parse data as a JSON object in all request handlers
app.use(express.json());

//app.use(propertiesRouter);
//app.use(agentsRouter);

app.listen(5001, () => console.log("Api running on port 5001", process));

app.get("/", (req, res) => res.json("Real estate API running!"));
