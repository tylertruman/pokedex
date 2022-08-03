import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { PokemonController } from "./Controllers/PokemonController.js";
import { SandboxPokemonController } from "./Controllers/SandboxPokemonController.js";


class App {
  activePokemonController = new ActivePokemonController();
  pokemonController = new PokemonController();
  sandboxPokemonController = new SandboxPokemonController();
}

window["app"] = new App();
