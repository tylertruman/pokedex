import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";




function _drawPokemons(){
    let template = ''
    ProxyState.pokemons.forEach(p => template += p.Template)
    document.getElementById('pokemons').innerHTML = template
}

export class PokemonController{
    constructor(){
        ProxyState.on('pokemons', _drawPokemons)
        this.getPokemons()
    }
    async getPokemons(){
        try {
            await pokemonService.getPokemons()
        } catch (error) {
            console.error('[Getting Pokemons]', error)
            Pop.error(error)
        }
    }

    async setActivePokemon(name){
        try {
            await pokemonService.setActivePokemon(name)
        } catch (error) {
            console.error('[Set Active Pokemon]', error)
            Pop.error(error)
        }
    }
}