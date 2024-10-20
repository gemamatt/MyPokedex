import React, { useEffect, useState } from 'react'; 
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getPokemonList, getPokemonDetails } from '../services/Api.js';
import styles from '../styles/PokemonListStyles.js';
import translations from '../services/translations.js'; 
import { fetchAbilityTranslation, fetchTypeTranslation } from '../services/translationUtils';

const PokemonList = ({ navigation, lang }) => { 
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchPokemon = async (page) => {
    if (page === 0) setLoading(true);
    setError(null);

    try {
      const limit = 20;
      const pokemonList = await getPokemonList(limit, page * limit);
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
            name: details.name.toUpperCase(),
            imageUrl: details.sprites.front_default,
            url: pokemon.url,
            types: translatedTypes.join(', '),
            abilities: translatedAbilities.join(', '),
            number: details.id
          };
        })
      );

      const uniquePokemon = [
        ...new Map(pokemonDetails.map((item) => [item.id, item])).values(),
      ];

      if (page === 0) {
        setPokemonData(uniquePokemon);
      } else {
        setPokemonData((prev) => [
          ...new Map([...prev, ...uniquePokemon].map((item) => [item.id, item])).values(),
        ]);
      }

    } catch (err) {
      const errorMessage = translations[lang]?.errorLoading || translations['es'].errorLoading;
      setError(errorMessage);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  const loadMorePokemon = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchPokemon(page);
  }, [lang, page]); 

  if (loading && page === 0) {
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
      keyExtractor={(item) => `${item.id}-${item.name}`}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { url: item.url })}>
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{translations[lang].number} {item.number}</Text> 
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.detail}>
              <Text style={{ fontWeight: 'bold' }}>{translations[lang].type}:</Text> {item.types}
            </Text>
            <Text style={styles.detail}>
              <Text style={{ fontWeight: 'bold' }}>{translations[lang].ability}:</Text> {item.abilities}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      onEndReached={loadMorePokemon}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isFetchingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
    />
  );
};

export default PokemonList;
