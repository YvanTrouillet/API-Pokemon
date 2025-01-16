import { Router } from "express";
import pokemonController from "../Controllers/pokemon.controller.js";

const pokemonRouter = Router();

pokemonRouter.get("/pokemons", pokemonController.getAllPokemons);

export default pokemonRouter;
