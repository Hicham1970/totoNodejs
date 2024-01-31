const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200);
  //   res.send("Hello World you are served by express!");
  res.json({
    massage: "All the users",
  });
});

// to use an id to get a user:
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200);
  res.json({
    id: id,
    name: "Sal",
    age: 25,
  });
});

///users/:id  get user info with id
///users post add new user
///users put update user
///users delete delete user


//add a new user to database

module.exports = router;
