import { ProxyState } from "../AppState.js";
import { pokemonApi } from "../Services/AxiosService.js";
import { Pokemon } from "../Models/Pokemon.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";


class PokemonService{
    async setActivePokemon(name) {
        let res = await pokemonApi.get('/api/v2/pokemon/'+ name)
        ProxyState.activePokemon = new ActivePokemon(res.data)
    }
    async getPokemons(){
        let res = await pokemonApi.get('/api/v2/pokemon?limit=100000&offset=0')
        ProxyState.pokemons = res.data.results.map(p => new Pokemon(p))
    }
}

export const pokemonService = new PokemonService()
