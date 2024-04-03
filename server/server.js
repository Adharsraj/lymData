import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import {ReactDOMServer} from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res, next) => {
  const context = {};
  const appHtml = ReactDOMServer?.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    if (context.url) {
      // If React Router has redirected, send a 301 redirect response
      return res.redirect(301, context.url);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});
