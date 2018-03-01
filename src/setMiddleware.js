import bodyparser from "body-parser";

export const setUpMiddleware = function(app) {
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
};
