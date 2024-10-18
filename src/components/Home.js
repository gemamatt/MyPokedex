import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/HomeStyles'; 
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <View style={styles.content}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.welcomeText}>¡GO!</Text>
    </View>
  );
};

export default Home;

