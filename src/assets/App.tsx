import React, {useState, useEffect} from 'react';
import './App.css';
import { Api } from './service/api';
import PokemonColection from './component/PokemonColection';
import { Pokemons } from './interface';
import axios from 'axios';

interface Pokes {
  name: string;
  url: string;
}

const App:React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [loadings, setLoadings] = useState<boolean>(false);
  useEffect(() => {
    const getInitialData =async () => {
      const result = await Api.getPokemons();

      if (result && result.hasOwnProperty("next")){
        setNextUrl(result.next)
      };

      if (result && result.hasOwnProperty('results')) {
        const data = result['results']
        if (data && data.length > 0) {
          data.forEach(async (pokemonName:Pokes) => {
            const result = await Api.getDetail(pokemonName.name) ;
            setPokemons((p)=> [...p,result]);
          });
        }
      };
    }
    getInitialData()
  },[])

  const loadMore = () => {
    const getInitialData =async () => {
      setLoadings(true);
      const res = await axios.get(nextUrl);
      const result = res.status === 200 ? res.data : {};
      if (result && result.hasOwnProperty("next")){
        setNextUrl(result.next)
      };

      if (result && result.hasOwnProperty('results')) {
        const data = result['results']
        if (data && data.length > 0) {
          data.forEach(async (pokemonName:Pokes) => {
            const result = await Api.getDetail(pokemonName.name) ;
            setPokemons((p)=> [...p,result]);
          });
        }
      };
      setLoadings(false);
    }
    getInitialData()
  }

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">
          POKEMON
        </header>
        <PokemonColection pokemons={pokemons}/>
        <div className="btn">
          <button onClick={()=>loadMore()}>
            {
              loadings? "Loading..." :"Load More"
            }
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
