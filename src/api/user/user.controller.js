import User from "./user.model";
import merge from "lodash/merge";

const userController = {
  getOne: function(req, res) {
    res.json(req.userDetails);
  },
  getAll: function(req, res) {
    User.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({ err: err });
      });
  },
  createOne: function(req, res) {
    var user = new User(req.body);
    user
      .save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({ err: err });
      });
  },
  updateOne: function(req, res) {
    var user = req.userDetails;
    merge(user, req.body);
    user
      .save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  delete: function(req, res) {
    var user = req.userDetails;
    user.remove().then(data => {
      res.json(data);
    });
  },
  findById: function(req, res, next) {
    User.findById(req.params.id, (err, res) => {
      req.userDetails = res;
      next();
    });
  }
};

export default userController;
