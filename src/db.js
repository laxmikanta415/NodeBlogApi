import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect("mongodb://lax:lax@ds249798.mlab.com:49798/nodeapp")
    .then(() => {
      console.log("connected successfully");
    })
    .catch(err => {
      console.log("Error connecting to database", err);
    });
};

export default connect;
