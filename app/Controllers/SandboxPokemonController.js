import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js"


function _draw(){
    let template = ''
    ProxyState.sandboxPokemons.forEach(p => template += p.ListTemplate)
    document.getElementById('sandbox-pokemons').innerHTML = template
    document.getElementById('known-pokemons').innerHTML = `
    <div class="text-white text-center"><h3>Pokeball Storage:</h3></div>`
}

export class SandboxPokemonController{
    constructor(){
        ProxyState.on('sandboxPokemons', _draw)
        this.getPokemons()
    }

    async getPokemons(){
        try {
            await sandboxPokemonService.getPokemons()
        } catch (error) {
            console.error('[Getting Pokemons]', error)
            Pop.error(error)
        }
    }

    async addPokemon(){
        try {
            await sandboxPokemonService.addPokemon()
        } catch (error) {
            console.error('[Adding Pokemon]', error)
            Pop.error(error)
        }
    }
    // TODO 
    // async deletePokemon
}