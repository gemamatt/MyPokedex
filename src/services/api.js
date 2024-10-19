import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemonList = async (limit = 20, offset = 0) => {
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
    const response = await fetch(url);
    const pokemon = await response.json();
    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();
    return { ...pokemon, flavor_text_entries: speciesData.flavor_text_entries };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEvolutionChain = async (speciesUrl) => {
  try {
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();
    return evolutionData;
  } catch (error) {
    console.error("Error fetching evolution chain:", error);
    return null;
  }
};


