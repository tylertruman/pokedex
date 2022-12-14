export class Pokemon {
    constructor({name, img}){
        this.name = name
        this.img = img
    }

    get Template(){
        return `
        <div class="selectable no-select p-2 text-white border border-light m-2 rounded" onclick="app.pokemonController.setActivePokemon('${this.name}')">
         <p class="mb-0"><b>${this.name}</b></p>
      </div>`
    }
}