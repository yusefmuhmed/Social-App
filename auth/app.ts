import express from "express";
const app = express();
const port = 3000;

app.get("*", (req, res) => res.status(200).send({ message: "Auth service" }));
export { app, port };
