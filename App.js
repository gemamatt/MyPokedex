import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header'; 
import Home from './src/components/Home'; 
import PokemonList from './src/components/PokemonList';
import PokemonDetail from './src/components/PokemonDetail';
import styles from './src/styles/AppStyles';
import translations from './src/services/translations';

const Stack = createNativeStackNavigator(); 

export default function App() {
  const [lang, setLang] = useState('es');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header 
          title={translations[lang].appTitle}
          toggleLanguage={toggleLanguage} 
          lang={lang} 
        />
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            options={{ headerShown: false }} 
          >
            {(props) => (
              <Home 
                {...props} 
                lang={lang} 
                toggleLanguage={toggleLanguage} 
              />
            )}
          </Stack.Screen>
          <Stack.Screen 
            name="PokemonList" 
            options={{ headerShown: false }} 
          >
            {(props) => (
              <PokemonList 
                {...props} 
                lang={lang} 
                toggleLanguage={toggleLanguage} 
              />
            )}
          </Stack.Screen>
          <Stack.Screen 
            name="PokemonDetail" 
            options={{ title: translations[lang].pokemonDetail }}
          >
            {(props) => (
              <PokemonDetail 
                {...props} 
                lang={lang} 
                toggleLanguage={toggleLanguage} 
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
