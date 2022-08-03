export interface Pokemons {
  id: number;
  name: string;
  abilities: [
    {ability: {
      name:string;
    }}
  ]
  sprites:{
    front_default: string;
  }
}