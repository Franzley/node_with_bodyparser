import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

const bandNameGenerator = (req, res, next) => {
  console.log(req.body);
  bandName = req.body.random + req.body.pet;
  next();
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1>
  <h3>${bandName}</h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
