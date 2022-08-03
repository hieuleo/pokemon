import React, {useState} from 'react';
import { Pokemons } from '../interface';
import PokemonList from './PokemonList';

interface PropsInterface {
  pokemons: Pokemons[]
}

const PokemonColection = ({pokemons}:PropsInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState<Pokemons>();

  const openDetail = (item:Pokemons) =>{
    setIsOpen(true)
    setDetail(item)
  }
  console.log(detail?.abilities)
  return (
    <div>
      <section className="collection-container">
        {
          pokemons.map(poke => (
            <div key={poke.id} className="" onClick={() => openDetail(poke)}>
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
      {
        isOpen?
        <div className="pokemon-list-detailed">
          <div className="detail-info">
            <img src={detail? detail.sprites.front_default: ''} alt={ detail? detail.name :''} />
            <p className="detail-name"> {detail? detail.name : ''}</p>
          </div>
          <div className="detail-skill">
            <p className="detail-ability"> Ablities: </p>
            {
              detail?.abilities ? detail.abilities.map(
                item => (
                  <div key={item.ability.name}>
                    {item.ability.name}
                  </div>
                )
              ):''
            }
          </div>
          <div className="pokemon-list-icon" onClick={() => setIsOpen(false)}> 
            <i className="pokemon-list-icon-i fa-solid fa-xmark"></i>
          </div>
        </div>:
        <></>
      }
    </div>
  )
}

export default React.memo(PokemonColection);