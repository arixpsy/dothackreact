import React, { useState, useEffect } from 'react'
import useQuery from './../../hooks/useQuery'
import { getSinglePokemon } from '../../apis/Pokemon'
import NotFound from './../../components/NotFound'
import _ from 'lodash'
import { Link } from 'react-router-dom'

function Pokemon() {
  const query = useQuery()
  const [pokemon, setPokemon] = useState(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    getSinglePokemon(query.get('name'))
    .then(response => {
      setPokemon(response.data)
    }).then(() => setLoadingData(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <section>
          { loadingData ? 
            
            <div class="lds-dual-ring"></div> :
            
            !pokemon ? 

            <NotFound /> :

            <div className="pokemon">
              <img alt="pokemon sprite" src={pokemon.sprites.front_default}/>
              <div className="pokemon-info">
                <h1>{ _.capitalize(pokemon.name) }</h1>
                <div className="pokemon-details">
                    <div>Pokemon ID</div>
                    <div>{ pokemon.id }</div>
                    <div>Height</div>
                    <div>{ pokemon.height }</div>
                    <div>Weight</div>
                    <div>{ pokemon.weight }</div>
                    <div>Abilities</div>
                    <div>{ pokemon.abilities.map(item => <p>{_.capitalize(item.ability.name)}</p>) }</div>
                </div>
                <Link to="/">Back to List</Link>
              </div>
            </div>
          }
      </section>
    </main>
  )
}

export default Pokemon
