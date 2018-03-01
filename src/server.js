import express from "express";
import {setUpMiddleware} from "./setMiddleware";

const app = express();

setUpMiddleware(app);

app.route("/").get((req, res) => {
  res.json({ ok: true });
});

export default app;
