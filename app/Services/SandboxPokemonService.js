import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import { SandboxPokemon } from "../Models/SandboxPokemon.js";



class SandboxPokemonService {
    async getPokemons() {
        let res = await sandboxApi.get('/pokemon')
        ProxyState.sandboxPokemons = res.data.map(p => new SandboxPokemon(p))
    }

    async addPokemon(){
        if (ProxyState.sandboxPokemons.find(p => p.name == ProxyState.activePokemon.name)){
            throw new Error('you already caught this pokemon')
        }
        let res = await sandboxApi.post('/pokemon', ProxyState.activePokemon)
        let newPokemon = new SandboxPokemon(res.data)
        ProxyState.sandboxPokemons = [...ProxyState.sandboxPokemons, newPokemon]
    }
}

export const sandboxPokemonService = new SandboxPokemonService()