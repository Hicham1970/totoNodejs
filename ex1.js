const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  //   res.send("Hello World you are served by express!");
  res.json({
    id: "AZ112",
    name: "Sal",
    age: 25,
  });
});

app.listen(port, () => {
  console.log("Le serveur est lancé sur le port " + port);
});
