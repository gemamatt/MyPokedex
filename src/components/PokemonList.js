import React, { useEffect, useState } from 'react'; 
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getPokemonList, getPokemonDetails } from '../services/Api.js';
import styles from '../styles/PokemonListStyles.js';
import translations from '../services/translations.js'; 
import { fetchAbilityTranslation, fetchTypeTranslation } from '../services/translationUtils'; // Importa las funciones

const PokemonList = ({ navigation, lang }) => { 
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const pokemonList = await getPokemonList(5, 0);
      const pokemonDetails = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await getPokemonDetails(pokemon.url);
          
          const translatedAbilities = await Promise.all(
            details.abilities.map(ability => fetchAbilityTranslation(ability.ability.url, lang))
          );
          
          const translatedTypes = await Promise.all(
            details.types.map(typeInfo => fetchTypeTranslation(typeInfo.type.url, lang))
          );

          return {
            id: details.id,
            name: details.name,
            imageUrl: details.sprites.front_default,
            url: pokemon.url,
            types: translatedTypes.join(', '),
            abilities: translatedAbilities.join(', '),
            number: details.id
          };
        })
      );
      setPokemonData(pokemonDetails);
    } catch (err) {
      const errorMessage = translations[lang]?.errorLoading || translations['es'].errorLoading;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [lang]); 

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
            <Text style={styles.detail}>{translations[lang].number}: {item.number}</Text> 
            <Text style={styles.detail}>{translations[lang].type}: {item.types}</Text> 
            <Text style={styles.detail}>{translations[lang].ability}: {item.abilities}</Text> 
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default PokemonList;
