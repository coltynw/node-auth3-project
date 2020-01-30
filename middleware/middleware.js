// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../secret");

// const Users = require("../users/usersModel");

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secrets.jwtSecrets, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "error" });
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message: "error" });
    }
};
module.exports = restricted; 