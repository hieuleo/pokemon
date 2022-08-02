import axios from "axios";

const getPokemons = async () =>{
    const url: string = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : {};
    return data;
};

const getDetail = async (name:string) =>{
    const url: string = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : {};
    return data;
};

export const Api = {
    getPokemons,
    getDetail
}