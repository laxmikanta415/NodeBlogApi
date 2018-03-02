import express from "express";
import { setUpMiddleware } from "./setMiddleware";
import connect from "./db";
import userRouter from "./api/user/user.router";
import { verifyToken, createToken, signin } from "./api/auth/auth";

const app = express();

setUpMiddleware(app);
connect();

app.post("/signin", createToken, signin);

app.use("/api", verifyToken, userRouter);

app.route("/").get((req, res) => {
  res.json({ ok: true });
});

app.use(function(err, req, res, next) {
  res.status(401).send(err);
});

export default app;
