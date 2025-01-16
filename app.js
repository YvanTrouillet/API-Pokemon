import "dotenv/config";
import express from "express";
import pokemonRouter from "./src/Routers/pokemon.router.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || /^(http:\/\/localhost:\d+|http:\/\/127\.0\.0\.1:\d+)$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allwed by CORS"));
      }
    },
  })
);

// JSON
app.use(express.json());

const port = 3000;

app.use(pokemonRouter);

app.listen(port, () => console.log("Le Serveur est bien lancé sur le port 3000"));
