export class ActivePokemon {
    constructor(data){
        this.name = data.name
        this.url = data.url
    }

    get ActivePokemonTemplate(){
        return `
        <div class="card">
     <div class="card-body">
      <div class="card-title">
        <h3>${this.name}</h3>
      </div>
      <div class="card-text">
      </div>
     </div>
     <div class="card-footer">
      <div class="text-end">
        <button onclick="app.sandboxPokemonController.addPokemon()" class="btn btn-dark">Add to Pokeball</button>
      </div>
     </div>
    </div>`
    }
}