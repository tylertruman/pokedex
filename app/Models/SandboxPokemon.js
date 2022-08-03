import { ActivePokemon } from "./ActivePokemon.js";

export class SandboxPokemon extends ActivePokemon {
    constructor(data) {
        super(data)
        this.id = data.id
    }

    get ListTemplate(){
        return `
        <h1>${this.name}</h1><h3>YOUR POKEMON WILL DRAW HERE</h3>`
    }
}