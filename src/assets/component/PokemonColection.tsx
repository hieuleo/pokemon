import React from 'react';
import { Pokemons } from '../interface';
import PokemonList from './PokemonList';

interface PropsInterface {
  pokemons: Pokemons[]
}

const PokemonColection = ({pokemons}:PropsInterface) => {
  console.log()
  return (
    <div>
      <section className="collection-container">
        {
          pokemons.map(poke => (
            <div key={poke.id} className="">
              <PokemonList
                keyId={poke.id}
                name={poke.name}
                id={poke.id}
                image={poke.sprites.front_default}
              />
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default React.memo(PokemonColection);