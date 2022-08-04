export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/tyler',
    timeout: 8000
})

export const pokemonApi = new axios.create({
    baseURL: 'https://pokeapi.co',
    timeout: 8000
})
