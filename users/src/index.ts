import express from "express";
import { initApp } from "./controller";

const app = initApp();
const port = 8080; // default port to listen

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
