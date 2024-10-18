import React, { useEffect, useState } from 'react'; 
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { getPokemonList, getPokemonDetails } from '../services/Api.js';
import styles from '../styles/PokemonListStyles.js';

const PokemonList = ({ navigation }) => { 
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const pokemonList = await getPokemonList(5, 0);
        const pokemonDetails = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const details = await getPokemonDetails(pokemon.url);
            return {
              id: details.id,
              name: details.name,
              imageUrl: details.sprites.front_default,
              url: pokemon.url, 
            };
          })
        );
        setPokemonData(pokemonDetails);
      } catch (err) {
        setError('Error al cargar los Pokémon.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={pokemonData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { url: item.url })}>
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default PokemonList;
