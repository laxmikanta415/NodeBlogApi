import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import User from "../user/user.model";

const checkToken = expressJwt({ secret: "blogSecret" });

export const signin = function(req, res, next) {
  console.log(req.userDetails._id);
  const token = signToken(req.userDetails._id);
  res.json({ access_token: token });
};

export const createToken = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    User.findOne({ username: username })
      .then(user => {
        if (!user.authenticate(password)) {
          res.status(401).send("Invalid Username or Password");
        }
        req.userDetails = user;
        next();
      })
      .catch(err => {
        res.status(401).send("No user found");
      });
  } else {
    res.status(401).send("User and password is mandatory");
  }
};

const decodeToken = function(req, res, next) {
  console.log(req.headers.authorization);
  checkToken(req, res, next);
};

export const verifyToken = function(req, res, next) {
  console.log("verifyToken");
  decodeToken(req, res, next);
};

const signToken = id => jwt.sign({ id: id }, "blogSecret");
