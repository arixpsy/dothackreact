import React, { useEffect, useState } from 'react'
import { getAllPokemon } from '../../apis/Pokemon'
import TileContainer from '../../components/TileContainer'
import SearchBar from './../../components/SearchBar'
import Tile from './../../components/Tile'

function Home() {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getAllPokemon()
    .then(response => {
      const data = response.data
      setPokemonList(data.results)
    })
  }, [])

  const filterPokemon = (pokemon) => {
    return pokemon.name.includes(searchPhrase)
  }

  return (
    <main>
      <section>
        <h1 className="title">My Pokedex</h1>
        <SearchBar  onChange={(e) => setSearchPhrase(e.target.value)}/>
        <TileContainer>
          { pokemonList.filter(filterPokemon).map(pokemon => 
            <Tile key={pokemon.name} pokemon={pokemon} />
            ) }
        </TileContainer>
      </section>
    </main>
  )
}

export default Home
