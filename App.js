
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header'; 
//import Home from './src/components/Home'; 
import PokemonList from './src/components/PokemonList';
import styles from './src/styles/AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="My Pokédex" />
      {/* <Home /> */}
      <PokemonList />
      <StatusBar style="auto" />
    </View>
  );
}
