const router = require("express").Router();
const restricted = require("../middleware/authRouter");

const Users = require("./usersModel");

router.get("/users", restricted, (req, res) => {
  Users.find()
    .then(user => res.json(user))
    .catch(err => res.json({ message: "error" }));
});

module.exports = router; 