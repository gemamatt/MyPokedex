import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header'; 
import Home from './src/components/Home'; 
import PokemonList from './src/components/PokemonList';
import styles from './src/styles/AppStyles';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title="My Pokédex" /> {}
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="PokemonList" 
            component={PokemonList} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
