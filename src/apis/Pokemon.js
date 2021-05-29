import axios from 'axios'
const BASE_URL = 'https://pokeapi.co/api/v2/'

const getAllPokemon = () => axios.get(`${BASE_URL}pokemon?limit=2000`)
const getSinglePokemon = (name) => axios.get(`${BASE_URL}pokemon/${name}`)

export {
  getAllPokemon,
  getSinglePokemon
}