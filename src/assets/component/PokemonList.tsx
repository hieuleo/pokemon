import React from 'react';
import './pokemon.css';
interface PropsInterface {
  keyId: number;
  name: string;
  id: number;
  image: string;
}

const PokemonList:React.FC<PropsInterface> = ({keyId, name, id, image}) => {
  return (
    <div>
      <section className="pokemon-list-container">
        <p className="pokemon-name">{name}</p>
        <img src={image} alt={name} />
      </section>
    </div>
  )
}

export default React.memo(PokemonList);