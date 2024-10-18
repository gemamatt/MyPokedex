import React, { useEffect, useState } from 'react'; 
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { getPokemonDetails } from '../services/Api'; 
import styles from '../styles/PokemonDetailStyles';

const PokemonDetail = ({ route }) => {
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
        setPokemon(details);
      } catch (err) {
        console.error(err);
        setError('Error al cargar los detalles del Pokémon.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url]);

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
        <Text style={styles.errorText}>No se encontraron detalles del Pokémon.</Text>
      </View>
    );
  }

  const { name, sprites, height, weight, types, abilities, id, flavor_text_entries } = pokemon;
  const flavorText = flavor_text_entries
    ?.filter(entry => entry.language.name === 'en')[0]?.flavor_text
    ?.replace(/\n|\f/g, ' ') || "No disponible"; 
  const typeNames = types?.map(type => type.type.name).join(', ') || "No disponible";
  const abilityNames = abilities?.map(ability => ability.ability.name).join(', ') || "No disponible";
  const imageUri = sprites?.other?.["official-artwork"]?.front_default || sprites?.front_default || 'https://via.placeholder.com/150';

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name || "Nombre no disponible"} (#{id})</Text>
      <Text style={styles.description}>Descripción: {flavorText}</Text>
      <Text style={styles.type}>Tipo: {typeNames}</Text>
      <Text style={styles.ability}>Habilidad: {abilityNames}</Text>
      <Text style={styles.weight}>Peso: {weight || "No disponible"}</Text>
      <Text style={styles.height}>Altura: {height || "No disponible"}</Text>
    </View>
  );
};

export default PokemonDetail;
