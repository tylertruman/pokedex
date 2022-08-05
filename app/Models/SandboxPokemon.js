import { ActivePokemon } from "./ActivePokemon.js";

export class SandboxPokemon extends ActivePokemon {
    constructor(data) {
        super(data)
        this.id = data.id
    }

    get ListTemplate(){
        return `
        <h5 class="text-white text-center">${this.name}</h5>`
    }
}