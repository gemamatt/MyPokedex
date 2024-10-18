import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemonList = async (limit = 5, offset = 0) => {
  try {
    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
