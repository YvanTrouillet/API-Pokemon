import prisma from "../../prisma.js";

const pokemonController = {
  getAllPokemons: async () => {
    try {
      const response = await prisma.pokemon.findMany();
      const data = await response.json();
      console.log(response);
      return data;
    } catch (error) {}
  },
};
export default pokemonController;
