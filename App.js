import { View } from 'react-native';
import Header from './src/components/Header';
import styles from './src/styles/AppStyles'; 
import Home from './src/components/Home'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="My Pokédex" />
      <Home />
    </View>
  );
}
