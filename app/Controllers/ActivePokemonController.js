import { ProxyState } from "../AppState.js";


function _draw(){
    if (!ProxyState.activePokemon){
        return
    }
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.ActivePokemonTemplate
}

export class ActivePokemonController{
    constructor(){
        ProxyState.on('activePokemon', _draw)
    }
}