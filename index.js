const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  //   res.send("Hello World you are served by express!");
  res.json({
    massage: "Welcome to the world of the API users",
  });

  const users = require("./routes/users");
  app.use("/users", users); /**use this road : /users */
});

app.listen(port, () => {
  console.log("Le serveur est lancé sur le port " + port);
});
