import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Pokemon').Pokemon[]} */
  pokemons = []

  /** @type {import('./Models/ActivePokemon').ActivePokemon[]} */
  activePokemon = {}

  /** @type {import('./Models/SandboxPokemon').SandboxPokemon[]} */
  sandboxPokemons = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
