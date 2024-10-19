import React, { useEffect, useState } from 'react';  
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { getPokemonDetails } from '../services/Api'; 
import styles from '../styles/PokemonDetailStyles';
import translations from '../services/translations';
import { fetchAbilityTranslation, fetchTypeTranslation } from '../services/translationUtils'; // Importa las funciones

const PokemonDetail = ({ route, lang, toggleLanguage }) => {
  const { url } = route.params; 
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const details = await getPokemonDetails(url);
        console.log('Detalles del Pokémon:', details);

        const translatedAbilities = await Promise.all(
          details.abilities.map(ability => fetchAbilityTranslation(ability.ability.url, lang))
        );
        
        const translatedTypes = await Promise.all(
          details.types.map(typeInfo => fetchTypeTranslation(typeInfo.type.url, lang))
        );

        setPokemon({
          ...details,
          abilities: translatedAbilities,
          types: translatedTypes
        });
      } catch (err) {
        console.error(err);
        setError(translations[lang].errorLoading);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url, lang]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{translations[lang].noDetails}</Text>
      </View>
    );
  }

  const { name, sprites, height, weight, id, flavor_text_entries } = pokemon;
  const flavorText = flavor_text_entries
    ?.filter(entry => entry.language.name === lang)[0]?.flavor_text
    ?.replace(/\n|\f/g, ' ') || translations[lang].unavailable;

  const typeNames = pokemon.types.join(', ') || translations[lang].unavailable; 
  const abilityNames = pokemon.abilities.join(', ') || translations[lang].unavailable; 
  const imageUri = sprites?.other?.["official-artwork"]?.front_default || sprites?.front_default || 'https://via.placeholder.com/150';

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name || translations[lang].nameUnavailable} (#{id})</Text>
      <Text style={styles.description}>{translations[lang].description}: {flavorText}</Text>
      <Text style={styles.type}>{translations[lang].type}: {typeNames}</Text>
      <Text style={styles.ability}>{translations[lang].ability}: {abilityNames}</Text>
      <Text style={styles.weight}>{translations[lang].weight}: {weight || translations[lang].unavailable}</Text>
      <Text style={styles.height}>{translations[lang].height}: {height || translations[lang].unavailable}</Text>
    </View>
  );
};

export default PokemonDetail;
