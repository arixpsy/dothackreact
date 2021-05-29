import React from 'react'
import { Link } from "react-router-dom";
function Tile({ pokemon }) {
  const id = pokemon.url.split('/')[6]
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  
  return (
    <Link to={`/pokemon?name=${pokemon.name}`}>
      <div className="tile">
        <img 
          alt="pokemon sprite" 
          src={url} />
        <p>{ pokemon ? pokemon.name : ''}</p>
      </div>
    </Link>
  )
}

export default Tile
