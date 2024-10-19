import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyles'; 
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import translations from '../services/translations';

const Home = ({ lang }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => navigation.navigate('PokemonList')}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>{translations[lang].welcome}</Text>
    </View>
  );
};

export default Home;
