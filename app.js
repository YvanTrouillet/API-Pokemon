import "dotenv/config";
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => console.log("Le Serveur est bien lancé sur le port 3000"));
