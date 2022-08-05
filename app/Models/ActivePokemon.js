export class ActivePokemon {
    constructor(data){
      
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.img = data.sprites
        this.stats = data.stats

        if (!this.img){
          this.img = "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9rZW1vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        }
    }

    get ActivePokemonTemplate(){
        return `
        <div class="card elevation-1 mt-2">
     <div class="card-body">
      <div class="card-title">
        <h2 class="text-center">${this.name}</h2>
        <img src="${this.img}">
        <p class="text-center">Height: ${this.height} | Weight: ${this.weight}</p>
        <p>${this.stats}</p>
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
