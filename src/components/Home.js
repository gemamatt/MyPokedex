import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyles'; 
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => navigation.navigate('PokemonList')}> {}
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>¡GO!</Text>
    </View>
  );
};

export default Home;

